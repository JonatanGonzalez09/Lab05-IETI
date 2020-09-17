import React from 'react';
import moment from "moment";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from "@material-ui/core/Typography";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import {TodoList} from './TodoList';
import './NewTask.css'
import './Filters.css'

export class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: [], description: '', name: '', email: '', status: '', dueDate: moment()};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    render(){
        return(
            <React.Fragment>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h3" className="letterTittle">Filters</Typography>
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
                           
                        </form>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3" className="letterTittle">Results</Typography>
                        <TodoList todoList={this.state.items}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    handleDescriptionChange(e) {
        let descip =e.target.value;
        let bitems =[]
        let items = JSON.parse(localStorage.getItem("items"));
        var x = items.map(function(item,i){
            if(item.description === descip){
                const newItem = {
                    description: item.description,
                    name: item.name,
                    email: item.email,
                    status: item.status,
                    dueDate: item.dueDate,
                };
                bitems = bitems.concat(newItem);
            }
        })
        this.setState({
            description: e.target.value,
            items: bitems,
            name: '',
            email: '',
            status: '',
            dueDate: ''
        });
    }

    handleNameChange(e) {
        let nam =e.target.value;
        let bitems =[]
        let items = JSON.parse(localStorage.getItem("items"));
        var x = items.map(function(item,i){
            if(item.name === nam){
                const newItem = {
                    description: item.description,
                    name: item.name,
                    email: item.email,
                    status: item.status,
                    dueDate: item.dueDate,
                };
                bitems = bitems.concat(newItem);
                
            }
        })
        this.setState({
            name: e.target.value,
            items: bitems,
            description: '',
            email: '',
            status: '',
            dueDate: ''
        });
    }
    handleEmailChange(e) {
        let ema =e.target.value;
        let bitems =[]
        let items = JSON.parse(localStorage.getItem("items"));
        var x = items.map(function(item,i){
            if(item.email === ema){
                const newItem = {
                    description: item.description,
                    name: item.name,
                    email: item.email,
                    status: item.status,
                    dueDate: item.dueDate,
                };
                bitems = bitems.concat(newItem);   
            }
        })
        this.setState({
            email: e.target.value,
            items: bitems,
            description: '',
            name: '',
            status: '',
            dueDate: ''
        });
    }
    handleStatusChange(e) {
        let stat =e.target.value;
        let bitems =[]
        let items = JSON.parse(localStorage.getItem("items"));
        var x = items.map(function(item,i){
            if(item.status === stat){
                const newItem = {
                    description: item.description,
                    name: item.name,
                    email: item.email,
                    status: item.status,
                    dueDate: item.dueDate,
                };
                bitems = bitems.concat(newItem);
                
            }
        })
        this.setState({
            status: e.target.value,
            items: bitems,
            description: '',
            name: '',
            email: '',
            dueDate: ''
        });
    }

    handleDateChange(e) {
        let dat =e.target.value;
        let bitems =[]
        let items = JSON.parse(localStorage.getItem("items"));
        var x = items.map(function(item,i){
            if(item.dueDate === dat.toString()){
                const newItem = {
                    description: item.description,
                    name: item.name,
                    email: item.email,
                    status: item.status,
                    dueDate: item.dueDate,
                };
                bitems = bitems.concat(newItem);
            }
        })
        this.setState({
            dueDate: e.target.value,
            items: bitems,
            description: '',
            name: '',
            email: '',
            status: ''
        });

    }

  

}