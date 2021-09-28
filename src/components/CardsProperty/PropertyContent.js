import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
	Box, Button, Snackbar, Table,
	TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const useStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	table: {
		minWidth: 450,
	},
	snackbar: {
		bottom: "104px",
	},
    mr10: {
        marginTop : '120px',
    }
});

function PropertyContent() {
	
	const classes = useStyles();

	
	const [rows, setRows] = useState([
		{ id: 1, property: "" },
	]);

	const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length + 1, property: "",
				
			},
		]);
		setEdit(true);
	};

	const handleEdit = (i) => {
	
		setEdit(!isEdit);
	};

	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
	};

	
	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

	const handleConfirm = () => {
		setShowConfirm(true);
	};


	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

	const handleNo = () => {
		setShowConfirm(false);
	};

return (
	<TableBody>
	<Snackbar
		open={open}
		autoHideDuration={2000}
		onClose={handleClose}
		className={classes.snackbar}
       
	>
		<Alert onClose={handleClose} severity="success">
		Record saved successfully!
		</Alert>
	</Snackbar>
	<Box margin={1}>
		<div style={{ display: "flex" ,marginLeft : '300px'}}>
		<div>
			{isEdit ? (
			<div>
				<Button onClick={handleAdd}>
				<AddBoxIcon onClick={handleAdd} style = {{color : '#E91E63'}} />
				ADD
				</Button>
				{rows.length !== 0 && (
				<div>
					{disable ? (
					<Button disabled align="right" onClick={handleSave}>
						<DoneIcon style = {{color : '#E91E63'}}/>
						SAVE
					</Button>
					) : (
					<Button align="right" onClick={handleSave}>
						<DoneIcon style = {{color : '#E91E63'}}/>
						SAVE
					</Button>
					)}
				</div>
				)}
			</div>
			) : (
			<div>
				<Button onClick={handleAdd} >
				<AddBoxIcon onClick={handleAdd} style = {{color : '#E91E63'}} />
				ADD
				</Button>
				<Button align="right" onClick={handleEdit}>
				<CreateIcon style = {{color : '#E91E63'}} />
				EDIT
				</Button>
			</div>
			)}
		</div>
		</div>
		<TableRow align="center"></TableRow>

		<Table
		className={classes.table}
		size="small"
		aria-label="a dense table"
		>
		<TableHead>
			<TableRow >
			<TableCell style = {{color : '#1E88E5',fontSize : '30px'}}>Property Name</TableCell>
		</TableRow>
		</TableHead>
		<TableBody>
			{rows.map((row, i) => {
			return (
				<div>
				<TableRow>
					{isEdit ? (
					<div >
						<TableCell padding="none">
						<input
							value={row.property}
							name="property"
							onChange={(e) => handleInputChange(e, i)}
                            style = {{  border: "none", borderBottom: "1px solid #000000",marginTop : '20px'}}
                               
						/>
						</TableCell>
						
					
					</div>
					) : (
					<div style = {{display : 'flex',}}>
						<TableCell component="th" scope="row"  style = {{  border: "none", borderBottom: "1px solid #90A4AE",marginTop : '20px'}}>
						{row.property}
						</TableCell>
					
						
					</div>
					)}
					{isEdit ? (
					<Button className="mr10" style = {{ marginTop:'-60px',marginLeft : '340px'}}onClick={handleConfirm}>
						<ClearIcon style = {{color : '#E91E63'}}/>
					</Button>
					) : (
					<Button className="mr10" style = {{ marginTop:'-50px',marginLeft : '270px'}}onClick={handleConfirm}>
						<DeleteOutlineIcon style = {{color : '#E91E63'}}/>
					</Button>
					)}
					{showConfirm && (
					<div>
						<Dialog
						open={showConfirm}
						onClose={handleNo}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						>
						<DialogTitle id="alert-dialog-title">
							{"Confirm Delete"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
						  Do you want to delete this record?
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button
							onClick={() => handleRemoveClick(i)}
							color="primary"
							autoFocus
							>
							Yes
							</Button>
							<Button
							onClick={handleNo}
							color="primary"
							autoFocus
							>
							No
							</Button>
						</DialogActions>
						</Dialog>
					</div>
					)}
				</TableRow>
				</div>
			);
			})}
		</TableBody>
		</Table>
	</Box>
	</TableBody>
);
}

export default PropertyContent;
