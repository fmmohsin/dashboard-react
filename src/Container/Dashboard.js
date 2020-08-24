import React, { Component, Fragment } from 'react'
import Createteam from '../Component/Createteam'
import './Dashboard.css'
import Teams from '../Component/Teams'
import Userboard from '../Component/Userboard'
class Dashboaard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItemId: ''
        }
    }
    HandleItemSelected = (teamId) => {
        this.setState({ selectedItemId: teamId })
    }
    render() {
        return (
            <Fragment>
                <header><Createteam /></header>
                <main>
                    <aside>
                        <Teams onItemSelected={this.HandleItemSelected} selectedItem={this.state.selectedItemId} />
                    </aside>
                    <section>
                        {this.state.selectedItemId !== '' ? <Userboard id={this.state.selectedItemId} /> : null}
                    </section>
                </main>
            </Fragment>
        )

    }
}
export default Dashboaard;