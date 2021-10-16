import React from 'react';

const Expert = (props) => {
    const { img, name, expertize } = props.expert;
    return (

        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
            <div className="bg-secondary rounded-3 p-4 mt-5">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>{expertize}</h5>
            </div>

        </div>


    );
};

export default Expert;