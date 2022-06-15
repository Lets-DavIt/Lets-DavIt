import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateComment from "../../components/CreateComment/CreateComment";
import Header from "../../components/Header/Header";
import VoteButtons from "../../components/VoteButtons/VoteButtons";
import VoteComments from "../../components/VoteComments/VoteComments";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { StyledCardDiv, StyledLoading, StyledPage } from "../../Styled";
import comment from "../../img/comment.png"
import { StyledButton, StyledList } from "../Post/Styled";
import { StyledListFeed } from "./Styled";

const Feed = ({ button, setButton, rightButtonText, setRightButtonText }) => {
    useProtectedPage();

    useEffect( () => {
        setButton(true);
    }, []);

    const params = useParams();

    const post = useRequestData( {}, `${BASE_URL}/posts`)[params.index];

    const comments = useRequestData( [], `${BASE_URL}/posts/${params.id}/comments`);

    const commentsList = comments.map(comment => {
        return (
            <StyledCardDiv key={comment.id}>
                <p className="styled-card-name">Enviado por: {comment.username}</p>
                <p>{comment.body}</p>
                <div>
                    <VoteComments userVote={comment.userVote} id={comment.id} voteSum={comment.voteSum} />
                </div>
            </StyledCardDiv>
        )
    })

    return (
        <StyledPage>
            <Header 
                button={button} 
                setButton={setButton} 
                rightButtonText={rightButtonText} 
                setRightButtonText={setRightButtonText}
            />
            <StyledList>{post ? <></> : <StyledLoading></StyledLoading> }</StyledList>
            {post && <StyledListFeed>
                    <StyledCardDiv>
                            <p className="styled-card-name">Enviado por: {post.username}</p>
                            <p>{post.body}</p>
                            <div className="styled-card-buttons">
                                <VoteButtons userVote={post.userVote} id={post.id} voteSum={post.voteSum}/>
                                <div className="styled-card-comments">
                                    <StyledButton><img src={comment}/></StyledButton>
                                    <p>{post.commentCount === null ? 0 : post.commentCount}</p>
                                </div>
                            </div>
                    </StyledCardDiv>      
                    <CreateComment id={post.id} />
            </StyledListFeed>}
            <StyledList>
                {commentsList.length > 0 ? <>{commentsList}</> : <p>Não há comentários</p>}
            </StyledList>
        </StyledPage>
    );
}

export default Feed;