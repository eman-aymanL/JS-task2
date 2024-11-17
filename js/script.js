var quotes=[
    {
        quote:'"Be yourself; everyone else is already taken."',
        author:"-Oscar Wilde"
    },
    {
        quote:'"Iam selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."',
        author:"-Marilyn Monroe"
    },
    {
        quote:'"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."',
        author:"-Albert Einstein"
    },
    {
        quote:'"A room without books is like a body without a soul."',
        author:"-Marcus Tullius Cicero"
    },
    {
        quote:'"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind."',
        author:"-Bernard M. Baruch"
    },
    {
        quote:'"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams."',
        author:"-Dr. Seuss"
    },
    {
        quote:'"In three words I can sum up everything I\'ve learned about life: it goes on."',
        author:"-Robert Frost"
    },
    {
        quote:'"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals."',
        author:"-J.K. Rowling"
    },
    {
        quote:'"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
        author:"-Ralph Waldo Emerson"
    },
    {
        quote:'"It is better to be hated for what you are than to be loved for what you are not."',
        author:"-Andre Gide"
    }
  
]
var prevQuote
function quoteClick(){
    var randomQuote =Math.trunc(Math.random()*quotes.length)
    while(randomQuote==prevQuote){
        randomQuote=Math.trunc(Math.random()*quotes.length)
    }
    console.log(randomQuote)
    prevQuote=randomQuote
    document.getElementById('quote').innerHTML=quotes[randomQuote].quote
    document.getElementById('author').innerHTML=quotes[randomQuote].author
}
