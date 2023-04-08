const messages = [
    "Extrapolating piton angle",
    "Reverse engineering social influence",
    "Balancing sponsorship weightings",
    "Retrofitting UKC beta duster",
    "Spelling thesaurus",
    "Consulting ChatGPT",
    "Creating UKB thread",
    "Frothing bilateral crimp analyser",
    "Short roping the Markov reward function",
    "Accounting for lattice inflation",
    "Conforming dry-skin sympathiser",
    "Conforming wet-skin sympathiser",
    "Conforming thin-skin sympathiser",
    "Conforming skin sympathiser",
    "Starting excuse engine",
    "Excuse engine has exceeded memory allocation",
    "Excuse engine has crashed",
    "Abandoning excuse engine",
    "Washing nuts",
    "Scrubbing cracks",
    "Searching for friends",
    "Calculating the echo of the move",
    "Stopping for McDonalds",
    "Lapping Keen Roof",
    "Pretensioning the ",
    "Installing Mcaffie"
];

const stepCount = 6;

function runModel()
{
    let s = 0;
    while (s < stepCount)
    {
        stepCalculation();
        s++;
    }
}

function stepCalculation()
{
    let statusIndex = Math.floor(Math.random() * messages.length);
    let statusMessage = messages[statusIndex];
    document.getElementById("message").innerHTML = statusMessage;
}