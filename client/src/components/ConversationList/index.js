import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import './ConversationList.css';

export default function ConversationList({users,setCurrentReceiver}) {
  console.log("hiii",users);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])
 const getConversations = () => {
  let newConversations = users.data.map(result => {
    // console.log(result)
    return {
      photo: 'https://thumbs.dreamstime.com/z/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.jpg',
      name: `${result.name}`,
      text: 'Hello world!',
      id:result._id
    };
  });
  setConversations([...newConversations])
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
              setCurrentReceiver={setCurrentReceiver}
            />
          )
        }
      </div>
    );
}