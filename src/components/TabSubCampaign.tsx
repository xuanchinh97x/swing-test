import {
  Box,
  Button,
  Checkbox,
  createSvgIcon,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface ISubCampaign {
  name: string;
  status: boolean;
  ads: IAdvert[];
}

interface IAdvert {
  name: string;
  quantity: number;
}

type SubCampaignProperty = "name" | "status" | "ads";

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

const ActiveIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
  </svg>,
  "Active"
);

function TabSubCampaign() {
  const [indexSelected, setIndexSelected] = useState<number>(0);
  const [subCampaigns, setSubCampaigns] = useState<ISubCampaign[]>([
    {
      name: "Chiến dịch con 1",
      status: true,
      ads: [
        {
          name: "Quảng cáo 1",
          quantity: 0,
        },
      ],
    },
  ]);

  const handleAddSubCampaign = () => {
    setSubCampaigns((prevValue) => {
      return [
        ...prevValue,
        {
          name: `Chiến dịch con ${prevValue.length + 1}`,
          status: true,
          ads: [
            {
              name: "Quảng cáo 1",
              quantity: 0,
            },
          ],
        },
      ];
    });

    setIndexSelected(subCampaigns.length - 1);
  };

  const handleAddIAdvert = () => {
    setSubCampaigns((prevValue) => {
      const newSubCampaigns = [...prevValue];
      newSubCampaigns[indexSelected].ads.push({
        name: `Quảng cáo ${newSubCampaigns[indexSelected].ads.length + 1}`,
        quantity: 0,
      });
      return newSubCampaigns;
    });
  };

//   const onChangeSubCampaign = (value: string, type: SubCampaignProperty) => {
//     setSubCampaigns((prevSubCampaigns: ISubCampaign[]) => {
//       const newSubCampaigns: ISubCampaign[] = [...prevSubCampaigns];
//       newSubCampaigns[indexSelected][type] = value;
//       return newSubCampaigns;
//     });
//   };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={1}>
        <IconButton sx={{ background: "rgb(237, 237, 237)" }}>
          <PlusIcon color="primary" onClick={handleAddSubCampaign} />
        </IconButton>

        <Box sx={{ display: "flex", width: "100%", overflow: "auto" }}>
          {subCampaigns.map((subCampaign, index) => (
            <Box
              key={index}
              m={2}
              p={3}
              boxShadow={2}
              borderRadius={2}
              sx={{ cursor: "pointer" }}
              minWidth={200}
              id={`subCampaigns-${index}`}
              onClick={() => setIndexSelected(index)}
            >
              <Typography variant="h6" align="center">
                {subCampaign.name}
                <ActiveIcon
                  color={`${subCampaign.status ? "success" : "disabled"}`}
                  fontSize="small"
                />
              </Typography>
              <Typography variant="h6" align="center">
                {subCampaign.ads.length}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              id="description-campaign"
              label="Tên chiến dịch con *"
              variant="standard"
              margin="dense"
              fullWidth
              value={subCampaigns[indexSelected].name}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                setSubCampaigns((prevValue) => {
                  const newSubCampaigns = [...prevValue];
                  newSubCampaigns[indexSelected].name = e.target.value;
                  return newSubCampaigns;
                })
              }
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  value={subCampaigns[indexSelected].status}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSubCampaigns((prevValue) => {
                      const newSubCampaigns = [...prevValue];
                      newSubCampaigns[indexSelected].status = e.target.checked;
                      return newSubCampaigns;
                    });
                  }}
                />
              }
              label="Đang hoạt động"
            />
          </Grid>
        </Grid>

        <Typography variant="h5" my={5}>
          DANH SÁCH QUẢNG CÁO
        </Typography>

        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Tên quảng cáo*</TableCell>
              <TableCell align="left">Số lượng*</TableCell>
              <TableCell align="right">
                <Button variant="outlined" onClick={handleAddIAdvert}>
                  + Thêm
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {subCampaigns[indexSelected].ads.map((Iadvert, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    variant="standard"
                    margin="dense"
                    fullWidth
                    value={Iadvert.name}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="standard"
                    margin="dense"
                    fullWidth
                    value={Iadvert.quantity}
                  />
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default TabSubCampaign;
