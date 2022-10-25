import Dnd from "../components/Dnd";

function Home() {
    //Will use redux and components developer tools

    //Use redux or context API to avaoid props drilling

    // Data can be fetched from a server
    const text =
        "Module Federation aims to solve the sharing of ---modules--- in a ---distributed--- system, by shipping those critical shared pieces as macro or as micro as you would like. It does this by pulling them out of the the build ---pipeline--- and out of your apps.";
    const heading = "Module Federation";

    return <Dnd text={text} heading={heading} />;
}

export default Home;
