export const goToLogin = (navigate) => {
    navigate("/");
}

export const goToPost = (navigate) => {
    navigate("/post");
}

export const goToRegister = (navigate) => {
    navigate("/register");
}

export const goToFeed = (navigate, id, index) => {
    navigate(`/feed/${id}/${index}`);
}
