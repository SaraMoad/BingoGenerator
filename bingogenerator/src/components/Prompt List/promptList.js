// Have all prompts shown on the side of the bingo card.
import * as React from "react";
import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FormControlLabel } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { bingoPrompts } from "../../data/bingoPrompt";
import { v4 as uuidv4 } from "uuid";

const PromptList = () => {
  const [open, setOpen] = useState(false);
  const [openedItemId, setOpenedItemId] = useState("");
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);
  const promptSections = [
    "Skills",
    "Interests",
    "Experiences",
    "Similarities",
    "Personal",
    "GPN",
    "Favourites",
    "Coding",
    "Food",
  ];

  const handleClick = (orgEvent) => {
    let clickedItemId = orgEvent.currentTarget.id;
    if (openedItemId === clickedItemId) {
      setOpenedItemId("");
    } else {
      setOpenedItemId(clickedItemId);
    }
  };

  const createKey = () => {
    const value = uuidv4();
    return value;
  };

  const checkboxOnChange = (event) => {
    let checked = event.target.checked;
    // console.log(checked);
    if (count === 25 && checked) {
    }
    if (checked) {
      console.log("checked");
      setCount(count + 1);
      checked = true;
    } else {
      console.log("un-checked");
      setCount(count - 1);
      checked = false;
    }
  };

  return (
    <List
      sx={{
        width: "20%",
        maxWidth: "20%",
        bgcolor: "background.paper",
        position: "absolute",
        right: "80%",
        top: "12%",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            fontSize: "1em",
            backgroundColor: "#6BC06F",
            borderBottom: "1px solid #000000",
          }}
          key={createKey()}
        >
          Bingo Prompt List {count}/25
        </ListSubheader>
      }
    >
      {promptSections.map((name, index) => {
        return (
          <>
            <ListItemButton
              sx={{
                borderBottom: "1px solid #000000",
                borderRight: "1px solid #000000",
                fontWeight: "bold",
              }}
              key={createKey()}
              onClick={handleClick}
              id={name}
            >
              <ListItemText
                sx={{
                  fontWeight: "bold",
                }}
                primary={name}
                key={createKey()}
              />
              {openedItemId === name ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            <Collapse in={openedItemId === name} timeout="auto" unmountOnExit>
              {bingoPrompts[index].map((prompt) => {
                return (
                  <List
                    sx={{
                      borderBottom: "1px solid #000000",
                      borderRight: "1px solid #000000",
                    }}
                    key={createKey()}
                    component="div"
                    disablePadding
                  >
                    <FormControlLabel
                      sx={{
                        fontSize: "16px",
                        marginLeft: "3px",
                        padding: "2px",
                      }}
                      control={<Checkbox onChange={checkboxOnChange} />}
                      label={prompt}
                      key={prompt}
                    />
                  </List>
                );
              })}
            </Collapse>
          </>
        );
      })}
    </List>
  );
};

export default PromptList;
