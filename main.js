function generateQuotes(){
    var x = parseInt(Math.floor(Math.random()*10));
    var quotes = ['“Be yourself; everyone else is already taken.”― Oscar Wilde','“So many books, so little time.”― Frank Zappa','“A room without books is like a body without a soul.”― Marcus Tullius Cicero','“You only live once, but if you do it right, once is enough.”― Mae West','“Be the change that you wish to see in the world.”― Mahatma Gandhi',',“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”― C.S. Lewis, The Four Loves','“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard','“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde','“Always forgive your enemies; nothing annoys them so much.”― Oscar Wilde','“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”― Martin Luther King Jr., A Testament of Hope: The Essential Writings','“Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi'];
    quotes.splice(x, 1);
    document.getElementById('quote').innerHTML = quotes[x];

}



