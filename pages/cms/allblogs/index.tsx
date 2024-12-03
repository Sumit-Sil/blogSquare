import { allBlogsQuery } from "@/CustomHooks/cms.query.hooks";
import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { useTheme } from "@emotion/react";
import { blogimagesFn } from "@/Api/Functions/blogimages.api";
import ImageLoader from "@/Ui/BlogImage/ImageLoader";
import SkeletonLoader from "@/Ui/Loader/Loader";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const allBlogs = () => {
  const theme = useTheme();
  const { data,isLoading } = allBlogsQuery();
  console.log(data, "data");
  const blogData = data?.data;
  console.log(blogData, "blogssss");
 if(isLoading){
  return <>
  <SkeletonLoader/>
  </>
 }
  return (
    <div >
      <TableContainer component={Paper} style={{height:"100vh"}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ fontSize: "25px" }} align="center">
                Title
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "25px" }} align="center">
                Post Text
              </StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: "25px" }} >Image</StyledTableCell>
              <StyledTableCell style={{ fontSize: "25px" }} align="center">
                {" "}
                Comment Count
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(blogData) &&
              blogData.map((d) => (
                <StyledTableRow key={d._id}>
                  <StyledTableCell
                    style={{ fontSize: "20px" }}
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {d.title}
                   
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontSize: "20px" }}
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {d?.postText
                      ?.slice(0, 300)
                      .replace(/<[^>]*>/g, "")
                      .replace(/&nbsp;/g, " ")}{" "}
                    ...{" "}
                    <Link
                      href={`/cms/allblogs/${d?._id}`}
                      style={{ color: "blue" }}
                    >
                      read full article
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ImageLoader blogid={String(d._id)}/>
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontSize: "20px" }}
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {d.comment_count}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
    </div>
  );
};

export default allBlogs;
