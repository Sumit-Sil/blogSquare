import { blogDetailsAPICall } from "@/Api/Functions/blogdetails.api";
import { likePostAPICall} from "@/Api/Functions/like.api";
import { useTheme } from "@emotion/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  faComments,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, ButtonGroup, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import { useGlobalHooks } from "@/CustomHooks/GlobalHokks";
import { addcommentQuery, showCommentQuery } from "@/CustomHooks/cms.query.hooks";
import { useForm } from "react-hook-form";
import { addCommentprops } from "@/Api/Functions/addcomment.api";
import SkeletonLoader from "@/Ui/Loader/Loader";
import ImageLoader from "@/Ui/BlogImage/ImageLoader";
import { unlikePostAPICall } from "@/Api/Functions/unlike.api";

const BlogDetails = () => {
  const router = useRouter();
  const { idval } = router.query;
  const { queryClient } = useGlobalHooks();

  const blogDetailsData = useQuery({
    queryKey: ["BlogDetails", idval],
    queryFn: () => blogDetailsAPICall(idval),
    enabled: !!idval,
  });

  const likeMutation = useMutation({
    mutationFn: () => likePostAPICall(idval),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["BlogDetails"] });
    },
  });

  const unlikeMutation = useMutation({
    mutationFn: () => unlikePostAPICall(idval),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["BlogDetails"] });
    },
  });
const {data:commentdata}=showCommentQuery(idval);

const {mutate,isPending:addcompending,error:addcommentError}=addcommentQuery(idval)
console.log(commentdata,"idval data of comment")
 

  const blogPostDetails = blogDetailsData.data?.data;
  const blogpending=blogDetailsData.isLoading
  console.log(blogPostDetails?.comments, "abcddgdwhged");
  const comments =commentdata?.post?.comment?.comments;

  const {register,handleSubmit,formState:{errors},reset}=useForm<addCommentprops>()
  const [open, setOpen] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    reset()
  };
// const{queryClient}=useGlobalHooks()
  const onSubmit=(e:addCommentprops)=>{

const payload={
name:e.name,
email:e.email,
comment:e.comment
}
mutate(payload,{
  onSuccess:(data)=>{
    toast.success("Comment added Succesfully")
reset();
queryClient.invalidateQueries({queryKey:["COMMENT"]})
setOpen(false)
  },
  onError:()=>{
toast.error("Something went Wrong")
  }
})
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;
  return (
    <Container
    sx={{
      // padding: "95px 50px",
      bgcolor: "white",
      borderRadius: "24px",
      display: "block",
      mb: "100px",
      mt: "70px",
    }}
  >
   
    <Box sx={{ width: "100%", textAlign: "center", mb: 4 }}>
      <ImageLoader blogid={String(idval)}/>
      <Typography
        variant="h4"
        sx={{
          mt: 2,
          bgcolor: "magenta",
          padding: "10px 30px",
          borderRadius: "50px",
          color: "black",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        {blogPostDetails?.title}
      </Typography>
    </Box>

    {/* Like and comment buttons, spaced around */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <FontAwesomeIcon icon={faComments} fontSize="24px" color={"black"} />
        <Typography>{blogPostDetails?.comments.length}</Typography>
      </Box>
      <ButtonGroup variant="contained" aria-label="like-dislike buttons">
        <Button onClick={likeMutation.mutate}>
          <FontAwesomeIcon icon={faThumbsUp} />
          &nbsp;{blogPostDetails?.likes}
        </Button>
        <Button onClick={unlikeMutation.mutate}>
          <FontAwesomeIcon icon={faThumbsDown} />
          &nbsp;{blogPostDetails?.unlikes}
        </Button>
      </ButtonGroup>
    </Box>

    {/* Blog content */}
    <Box>
      <Typography
        variant="body1"
        fontSize="16px"
        sx={{ marginBottom: "1rem" }}
        dangerouslySetInnerHTML={{ __html: blogPostDetails?.postText }}
      />
    </Box>

    {/* Comments Section */}
    <Typography color="black" fontWeight="semibold" mb={2}>
      Comments:
    </Typography>
    <Box>
      {Array.isArray(comments) &&
        comments.map((item) => (
          <Card key={item.id} variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.comment}
              </Typography>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>

    {/* Add Comment Button */}
    <Button
      variant="contained"
      color="primary"
      onClick={handleDialogOpen}
      sx={{ mt: 3 }}
    >
      Add Comment
    </Button>

    {/* Dialog for adding a comment */}
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>Add a Comment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill in the form below to add your comment.
        </DialogContentText>
        <Typography variant="h6" gutterBottom style={{ color: "black" }}>
          Name
        </Typography>
        <TextField
          {...register("name", { required: "Name is required" })}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name && "Name is required"}
        />
        <Typography variant="h6" gutterBottom style={{ color: "black" }}>
          Email
        </Typography>
        <TextField
          {...register("email", { required: "Email is required" })}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email && "Email is required"}
        />
        <Typography variant="h6" gutterBottom style={{ color: "black" }}>
          Comment
        </Typography>
        <TextField
          {...register("comment", { required: "Comment is required" })}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!errors.comment}
          helperText={errors.comment && "Comment is required"}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          color="primary"
          disabled={addcompending}
        >
          {addcompending ? "Submitting..." : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  </Container>
  );
};

export default BlogDetails;
