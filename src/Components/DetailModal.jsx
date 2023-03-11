import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia, CardContent, Card, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DetailModal = (props) => {
  const { openModal, handleModalClose } = props;

  const MovieDetail = useSelector((state) => state.MovieReducer.MovieDetail);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 3,
            }}
            component='div'
          >
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Detail
            </Typography>
            <IconButton onClick={handleModalClose}>
              <CloseIcon />
            </IconButton>
          </Typography>

          {MovieDetail?.map((detail, i) => {
            return (
              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography gutterBottom variant='h5' component='div'>
                      {detail.Title}
                    </Typography>

                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      Cast:Robert Downey Jr., Jon Favreau, Gwyneth Paltrow, Jeff
                      Bridges
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      Director: Jon Favreau
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      Box office: 58.58 crores USD
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      Budget: 14 crores USD
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    ></Typography>
                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      imdb: 100%
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      Star
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component='img'
                  sx={{ width: 150 }}
                  image={detail.Poster}
                />
              </Card>

              // <Card sx={{ maxWidth: 300 }}>
              //   <CardMedia sx={{ height: 400,  }} image={detail.Poster} />
              //   <CardContent>
              //     <Typography gutterBottom variant='h5' component='div'>
              //       {detail.Title}
              //     </Typography>
              //   </CardContent>
              // </Card>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};

export default DetailModal;
