import { TextField } from "@mui/material";
import React, { useState } from "react";

function TabInfo() {
  const [nameCampaign, setNameCampaign] = useState<string>("");
  const [describeCampaign, setDescribeCampaign] = useState<string>("");

  return (
    <div>
      <TextField
        id="name-campaign"
        label="Tên chiến dịch *"
        variant="standard"
        margin="dense"
        fullWidth
        value={nameCampaign}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNameCampaign(e.target.value);
        }}
      />

      <TextField
        id="description-campaign"
        label="Mô tả"
        variant="standard"
        margin="dense"
        fullWidth
        value={describeCampaign}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescribeCampaign(e.target.value)
        }
      />
    </div>
  );
}

export default TabInfo;
