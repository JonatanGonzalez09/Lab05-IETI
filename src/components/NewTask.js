import React from 'react';
import moment from "moment";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from "@material-ui/core/Typography";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import './NewTask.css'

export class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], description: '', name: '', email: '', status: '', dueDate: moment()};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <React.Fragment>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={8}>
                        <Typography className="letterTittle" variant="h3" >New Task</Typography>
                        <form onSubmit={this.handleSubmit} className="todo-form">
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                id="description"
                                onChange={this.handleDescriptionChange}
                                value={this.state.description}
                                label="Description"
                                variant="outlined"
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                id="name"
                                onChange={this.handleNameChange}
                                value={this.state.name}
                                label="Name"
                                variant="outlined"
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                id="email"
                                onChange={this.handleEmailChange}
                                value={this.state.email}
                                label="Email"
                                variant="outlined"
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel >Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    value={this.getStatus}
                                    onChange={this.handleStatusChange}
                                    label="Name"
                                    variant="outlined"
                                    >
                                    <MenuItem value="Ready">Ready</MenuItem>
                                    <MenuItem value="In progress">In progress</MenuItem>
                                    <MenuItem value="Done">Done</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                    id="dueDate"
                                    label="Due Date"
                                    type="Date"
                                    variant="outlined"
                                    onChange={this.handleDateChange}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <Button variant="contained" color="primary" onClick={this.handleSubmit} >
                                    Add new Task
                                </Button>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            dueDate: e.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.description.length || !this.state.name.length || !this.state.email.length || !this.state.status.length || !this.state.dueDate)
            return;

        const newItem = {
            description: this.state.description,
            name: this.state.name,
            email: this.state.email,
            status: this.state.status,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            name: '',
            email: '',
            status: '',
            dueDate: ''
        }));
        if (localStorage.getItem("items") === null) {
            var items = [this.state];
            localStorage.setItem("items", JSON.stringify(items));
          } else {
            let items = JSON.parse(localStorage.getItem("items"));
            items.push(this.state);
            localStorage.setItem("items", JSON.stringify(items));
          }
        window.location.replace("/");
    }

}