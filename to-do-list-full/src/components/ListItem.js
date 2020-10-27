import React from 'react'
import { connect } from 'react-redux';
import Item from './Item';

class  ListItem extends React.Component {
    render(){
    let {note,keyword} = this.props;
     note = note.filter((item) => {
        return item.content.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    let listItem = note.map((item,index) => {
        return (
            <Item
                key={item.id}
                noteData={item}
                index = {index+1}
            />
        )
    });
    return (
        <div className="panel panel-success">
                    <div className="panel-heading">List Item</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">#</th>
                                <th>Name</th>
                                <th style={{ width: '15%' }} className="text-center">Level</th>
                                <th style={{ width: '15%' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItem}
                            
                        </tbody>
                    </table>
                </div>
    )
    }
}
const mapStateToProps = state => {
    return {
        note : state.note,
        keyword : state.search,
    
    }
};
export default connect(mapStateToProps, null)(ListItem);
