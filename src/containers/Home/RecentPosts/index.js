import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require('../../../blogPostimages/xyz.jpg')} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>DUSK</h2>
                <span>posted on July 21, 2016 by SHREYA VASHISHTHA</span>
                <p>A large drop of sun lingered on the horizon and then dripped over and was gone, and the sky was brilliant over the spot where it had gone, and a torn cloud, like a bloody rag, hung over the spot of its going. And dusk crept over the sky from the eastern horizon, and darkness crept over the land from the east.</p>

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts