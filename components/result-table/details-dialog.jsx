
import {
  Box,
  Dialog,
  DialogTitle,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table
} from "@material-ui/core";

// shows the dialog with details of each row
export function DetailsDialog(props) {
  //
  const { onClose, open, row } = props;

  // make a copy of the object being displayed
  let dataToDisplay = { ...row };

  // delete unecessary fields
  const deleteFields = [
    "selected",
    "unique_id",
    "ID",
    "Canonical_author",
    "Name_matched_url",
    "Name_matched_lsid",
    "Accepted_name_url",
    "Overall_score_order",
    "Highertaxa_score_order",
    "Accepted_name_lsid",
    "Accepted_name_id",
    "Accepted_name_rank",
    "Family_submitted",
    "Specific_epithet_submitted",
    "Genus_submitted",
    "Author_submitted",
    "Name_matched_id",
  ];

  deleteFields.forEach((field) => delete dataToDisplay[field]);

  return (
    <Dialog aria-labelledby="dtitle" open={open} maxWidth="lg">
      <DialogTitle id="dtitle">Details of the selected name</DialogTitle>
      <Box m={4} mt={0}>
        <TableContainer>
          <Table aria-label="change selection table">
            <TableHead>
              <TableRow>
                <TableCell>Key</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(dataToDisplay).map(([key, value], idx) => (
                <TableRow key={idx}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Dialog>
  );
}

