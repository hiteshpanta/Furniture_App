import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"
import { useSelector } from "react-redux"
import toast from "react-hot-toast"
import { Spinner } from "../../components/ui/spinner"
import { useRemoveBlogMutation } from "./blogApi"

export function RemoveBlog({ id }) {
  const { user } = useSelector((state) => state.userSlice);
  const [removeBlog, { isLoading }] = useRemoveBlogMutation();

  const handleRemoveBlog = async () => {
    try {
      await removeBlog({ id, token: user.token }).unwrap();
      toast.success('Blog removed successfully');
    } catch (err) {
      toast.error(err.data.message);
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={'bg-red-700'} disabled={isLoading}>
          {isLoading ? <Spinner /> : <TrashIcon />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this product
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemoveBlog}>ConFirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
