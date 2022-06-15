import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToFeed } from "../../routes/coodinator";
import VoteButtons from "../../components/VoteButtons/VoteButtons";
import CreatePost from "../../components/CreatePost/CreatePost";
import { StyledCardDiv, StyledPage, StyledLoading } from "../../Styled";
import { StyledButton, StyledList } from "./Styled";
import comment from "../../img/comment.png"

const Post = ({ rightButtonText, setRightButtonText }) => {
    useProtectedPage();
    const navigate = useNavigate();

    const posts = useRequestData([],`${BASE_URL}/posts`);

    const onClickPost = (id, index) => {
        goToFeed(navigate, id, index);
    }

    const postsList = posts.map( (post, index) => {
        return (
            <StyledCardDiv key={post.id}>
                <p className="styled-card-name">Enviado por: {post.username}</p>
                <p>{post.body}</p>
                <div className="styled-card-buttons">
                    <VoteButtons userVote={post.userVote} id={post.id} voteSum={post.voteSum} />
                    <div className="styled-card-comments">
                        <StyledButton onClick={() => onClickPost(post.id, index)}><img src={comment}/></StyledButton>
                        <p>{post.commentCount === null ? 0 : post.commentCount}</p>
                    </div>
                </div>
            </StyledCardDiv>
        )
    });

    return (
        <StyledPage>
            <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            <CreatePost/>
            <StyledList>
                {postsList.length > 0 ? <>{postsList}</> : <StyledLoading></StyledLoading>}
            </StyledList>
        </StyledPage>
    );
}

export default Post;