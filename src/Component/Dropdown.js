import React, { Component } from 'react'
import './Dropdown.css'
class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types: ['Team'],
            show: this.props.show,
            selectedType: ''
        }
    }
    handleToggle = (e) => {
        e.target.focus();
        this.setState({ show: !this.state.show });
    }
    handleBlur = (e) => {
        if (e.nativeEvent.explicitOriginalTarget &&
            e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
            return;
        }

    }
    onClickType = (type) => {
        this.setState({ show: !this.state.show, selectedType: type })
        this.props.onClickType(type)
    }
    render() {
        const option = this.state.selectedType=== '' ? (<span>Choose Any<label className="arrow"><span></span></label></span>) : this.state.selectedType
        let classForBtn='dropdown-btn'
        if(this.state.selectedType!== '')
            classForBtn+=' type-selected'
        return (
            <div className="dropdown-container">
                <button className={classForBtn} id="types" onClick={this.handleToggle} onBlur={this.handleBlur}
                >{option}</button>
                <ul className="dropdown-list" onBlur={this.handleToggle} hidden={!this.state.show}>
                    {
                        this.state.types.map((type) => (
                            <li className="option" onClick={this.onClickType.bind(this, type)} key={type}>{type}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default React.memo(Dropdown);