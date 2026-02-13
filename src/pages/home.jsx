import PageContent from "../components/PageContent.jsx";
import Content from "../components/Content.jsx";

function Home() {
    return (
        <PageContent children={
            <Content
                title={"Welcome to Pi Generator!"}
                children={<>
                    <p>No LLM, just good old algorithm.</p>
                    <p>For all the music and math geeks, you can generate music<span className="sup">*</span> from the number Pi! 3.14152...</p>
                    <p><span className="sup">*</span>Well, notes only in text. You'll have to play it yourself on your instrument!</p>
                    <p>You will need to set couple of things: a key, a scale and how many notes you want to generate.</p>
                    <p>Since this generator supports many scales, you'll need to first filter out what scales you want: Major, minor, pentatonic...</p>
                    <p>Still, there are only five steps to get your generated result.</p>
                    <p>Available actions <span className="text-yellow-600 animate-pulse">glow in gold</span>.</p>
                    <p>What is not available yet is <span className="text-gray-600">greyed out</span>.</p>
                    <p>What is already set is <span className="text-green-600">green</span>.</p>
                    <p>You can always <span className="text-red-600">reset</span> your progress.</p>
                    <p>Go for it!</p>
                </>}
            />
        } />
    );
}

export default Home;
