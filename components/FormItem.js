import React from "react";

class FormItem extends React.Component{
    constructor(formData){
        super(formData)
        this.formData=formData
        this.state={value:formData.frm_value};
        this.handleChange=this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    render(){
        return <div className="mb-6">
            <label for={this.formData.name} className="block mb-2 text-sm font-medium text-gray-900">{this.formData.frm_name}:</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type={this.formData.frm_type}
            placeholder={this.formData.frm_name}
            name={this.formData.frm_name.toLowerCase()}
            value={this.state.value}
            onChange={this.handleChange}
            required={this.formData.frm_req}
            >
            </input>

        </div>
    }
}

export default FormItem;