import React from 'react';
import { useState } from "react";
import { RiCloseLine} from 'react-icons/ri';
import { useEffect } from "react";
// import Navbar2 from '../components/Navbar2';

import {Routes, Route, useNavigate} from 'react-router-dom';
import './anxietypage.css';
import bgimg1 from '../assests/meditation.jpg'
import anxietybanner from '../assests/anxietybanner.jpg'
// import Song from '../components/song';
// import Suggestion from '../components/suggestions';
// import Podcast from '../components/podcasts';
// import NewNavbar from '../components/Newnavbar';
import NavbarNew from './Navbarnew';


const activityRecommendations = [
    
 "When you're feeling anxious, taking deep breaths and counting to ten can help you regulate your breathing and calm your mind. Focus on each inhale and exhale, and allow yourself to relax with each breath. Remember that it's okay to take a moment to pause and center yourself." ,
  "If you're feeling overwhelmed by anxiety, try going for a walk or jog to release endorphins and clear your head. Exercise is a great way to reduce stress and improve your mood. You don't have to push yourself too hard - just get outside and move your body in a way that feels good.",
  "Sometimes it can be helpful to write down your thoughts and worries in a journal to get them out of your head. This can help you gain perspective and clarity, and allow you to process your emotions in a more constructive way. Remember that your feelings are valid, and writing them down can be a powerful tool for healing.",
  "Aromatherapy can be a powerful tool for reducing anxiety. Essential oils like lavender and chamomile are known for their calming properties, and can help you relax and unwind. Try using a diffuser, or dilute the oils with a carrier oil and apply them to your skin.",
  "Taking a warm bath with Epsom salts can be a great way to relax your muscles and reduce stress. The warm water and salts can help soothe sore muscles and promote a sense of calm. Light some candles or use aromatherapy to create a spa-like atmosphere in your bathroom.",
  "If you're feeling tense and anxious, practicing some gentle yoga poses can help release tension in your body. Yoga is a great way to connect with your breath and calm your mind. Even a few simple stretches can help you feel more grounded and centered.",
  "Listening to calming music or nature sounds can be a soothing way to reduce anxiety. Try creating a playlist of your favorite songs or sounds, and listen to them whenever you need to relax. Music has the power to shift your mood and energy, so choose music that makes you feel calm and happy.",
  "Practicing mindfulness meditation can be a powerful way to manage anxiety. By focusing on the present moment and observing your thoughts without judgment, you can learn to cultivate a sense of calm and inner peace. There are many apps and resources available to help you get started with mindfulness, so don't be afraid to explore what works best for you.",
  "When you're feeling anxious, talking to a trusted friend or family member can help you gain perspective and feel supported. Don't be afraid to reach out and ask for help - sometimes just having someone to listen can make all the difference.",
  "Getting a massage or acupuncture treatment can be a great way to release tension and promote relaxation. These therapies can help improve circulation, reduce muscle tension, and calm the mind. Find a practitioner you trust and allow yourself to fully relax and let go.",
  "Practicing progressive muscle relaxation is a technique that involves tensing and relaxing different muscle groups in your body. This can help you become more aware of the physical sensations in your body, and learn to release tension and stress. Start by tensing and releasing your hands, then work your way up your arms, shoulders, and so on.",
  "Engaging in a creative hobby such as painting, drawing, or knitting can be a powerful way to distract your mind from anxious thoughts. These activities can be meditative and calming, and can help you focus on the present moment. Don't worry about being perfect - just enjoy the process of creating something.",
  "Using positive self-talk and affirmations can help counter negative thoughts and build self-confidence. Whenever you notice yourself thinking negatively, try to reframe the thought into something more positive and affirming. Remember that you are capable and worthy of happiness, and that you have the power to overcome anxiety.",
  "Learning to say positive affirmations to yourself can be a powerful way to reduce anxiety and improve your self-esteem. Repeat phrases such as 'I am capable and strong', 'I am worthy of love and happiness', or 'I trust myself and my decisions'. Allow yourself to believe these positive statements and let them uplift your mood.",
  "Practicing mindfulness meditation can be a helpful way to reduce anxiety and improve your mental well-being. Sit in a comfortable position and focus on your breath, allowing yourself to be fully present in the moment. Notice any thoughts or feelings that arise, but don't judge them or engage with them. Simply observe them and return your focus to your breath.",
  "Using humor and laughter can be a powerful way to reduce anxiety and improve your mood. Watch a funny movie or TV show, or spend time with friends who make you laugh. Laughter can help shift your perspective and improve your outlook.",
  "Using a weighted blanket or hug pillow can be a comforting way to reduce anxiety and promote relaxation. The pressure and weight can help reduce feelings of stress and promote a sense of calm.",
  "Taking a break and doing something that brings you joy can be a helpful way to reduce anxiety. This might include watching a movie, playing a game, or spending time with loved ones. Remember that it's okay to prioritize your own happiness and well-being.",
  "Seeking therapy or counseling can be a helpful way to manage anxiety. A therapist can provide tools and strategies to help you cope with anxiety, and provide a safe and supportive space to talk about your feelings.",
  "Engaging in a regular exercise routine can be a powerful way to reduce anxiety and improve your mood. Choose an activity that you enjoy, such as running, swimming, or dancing. Aim for at least 30 minutes of moderate exercise each day.",
  "Practicing self-compassion is an important way to reduce anxiety and improve your mental health. Remember to treat yourself with kindness and compassion, just as you would a good friend. Don't be too hard on yourself, and allow yourself to make mistakes and learn from them.",
  "Using guided imagery is a technique that involves imagining a peaceful scene or situation to help reduce anxiety. Close your eyes and imagine yourself in a calm and peaceful place, such as a beach or a forest. Allow yourself to fully immerse in the visualization and feel the sense of calm it brings.",
  "Practicing gratitude journaling can be a helpful way to focus on the positive aspects of your life. Each day, write down three things that you are grateful for. This can help cultivate a sense of gratitude and joy, and help reduce anxiety.",
  "Connecting with nature can be a powerful way to reduce anxiety and promote well-being. Spend time outside in a park, beach, or forest, and allow yourself to connect with the natural world. Take deep breaths and allow yourself to be present in the moment.",
  "Setting boundaries and saying no can be an important way to reduce stress and manage anxiety. Remember that it's okay to prioritize your own needs and well-being. Don't be afraid to communicate your boundaries clearly and respectfully.",
  "Getting enough sleep is crucial for managing anxiety. Aim for 7-8 hours of sleep each night, and create a calming bedtime routine to help you unwind. This might include reading a book, taking a warm bath, or listening to relaxing music.",
  "Eating a healthy, balanced diet can help support your mental health and reduce anxiety. Avoid processed foods and excess sugar, and focus on whole foods like fruits, vegetables, and lean proteins. Hydrate with plenty of water and avoid caffeine and alcohol.",
  "Taking a break from social media and news can be a helpful way to reduce anxiety. It's important to stay informed, but sometimes too much information can be overwhelming. Allow yourself to disconnect and focus on things that bring you joy.",
  "Practicing gratitude can be a powerful way to shift your focus from anxious thoughts to positive ones. Take a few moments each day to reflect on the things in your life that you are grateful for, no matter how small. This can help cultivate a sense of appreciation and joy in your life."

];

const songRecommendations = [
    // 'someone like you',
    // 'lost in japan',
    // 'africa',
    // 'ophelia',
    // 'billie jean'
   
        {
          title: "Someone Like You",
          artist: "Adele",
          year: 2011,
          link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB"
        },
        {
          title: "Lost in Japan",
          artist: "Shawn Mendes",
          year: 2018,
          link: "https://open.spotify.com/track/0PPKzqjAsTlkKdBEhT6MZf"
        },
        {
          title: "Stay With Me",
          artist: "Sam Smith",
          year: 2014,
          link: "https://open.spotify.com/track/0Mn3amMRMoabaoTf1PFqyS"
        },
        {
          title: "Say You Love Me",
          artist: "Jessie Ware",
          year: 2014,
          link: "https://open.spotify.com/track/3KnbcG3fZd1XcQ2WjTE8Cv"
        },
        {
          title: "I Will Follow You into the Dark",
          artist: "Death Cab for Cutie",
          year: 2005,
          link: "https://open.spotify.com/track/5v5SvJvc7OY5pVH04Ezj27"
        },
        {
          title: "Skinny Love",
          artist: "Bon Iver",
          year: 2007,
          link: "https://open.spotify.com/track/2R7iM5JEeaSGjYmbpNKvvr"
        },
        {
          title: "Slow Dancing in a Burning Room",
          artist: "John Mayer",
          year: 2006,
          link: "https://open.spotify.com/track/6PAt558ZEZl0DmdXlnjMgD"
        },
        {
          title: "Yellow",
          artist: "Coldplay",
          year: 2000,
          link: "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg"
        },
        {
          title: "The Scientist",
          artist: "Coldplay",
          year: 2002,
          link: "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle"
        },
        {
          title: "Fix You",
          artist: "Coldplay",
          year: 2005,
          link: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q"
        },
        {
          title: "Clocks",
          artist: "Coldplay",
          year: 2002,
          link: "https://open.spotify.com/track/1UwEfQZhnQyEMv4LzkJFeP"
        },
        {
          title: "We Found Love",
          artist: "Rihanna ft. Calvin Harris",
          year: 2011,
          link: "https://open.spotify.com/track/1sTDLwG6clbjSvS1SxuKfy"
        },
        {
            title: "Chasing Cars",
            artist: "Snow Patrol",
            year: 2006,
            link: "https://open.spotify.com/track/6VcwrLtQkS1Ofk5aGSsM3K"
            },
            {
            title: "Breathe Me",
            artist: "Sia",
            year: 2004,
            link: "https://open.spotify.com/track/5X42f3n0oVpKzwvtlSEAcZ"
            },
            {
            title: "To Build a Home",
            artist: "The Cinematic Orchestra",
            year: 2007,
            link: "https://open.spotify.com/track/2Hjr9Kkc9IgZHJc7r1Zrtr"
            },
            {
            title: "Heartbeats",
            artist: "José González",
            year: 2003,
            link: "https://open.spotify.com/track/5TZ1QnAkaBZcOJgsdDIXTp"
            },
            {
            title: "The Blower's Daughter",
            artist: "Damien Rice",
            year: 2001,
            link: "https://open.spotify.com/track/2QOEyzLxPjhLeO7VhjH67X"
            },
            {
            title: "Breathe",
            artist: "Alexi Murdoch",
            year: 2006,
            link: "https://open.spotify.com/track/2AmRxIYknYuzRkJxv6TdcT"
            },
            {
            title: "The Only Exception",
            artist: "Paramore",
            year: 2009,
            link: "https://open.spotify.com/track/7mldq42yDuxiUNn08nvzHO"
            },
            {
            title: "Clarity",
            artist: "Zedd ft. Foxes",
            year: 2012,
            link: "https://open.spotify.com/track/0kN8xEmgMW9mh7UmDYHlJP"
            },
            {
            title: "Young and Beautiful",
            artist: "Lana Del Rey",
            year: 2013,
            link: "https://open.spotify.com/track/0RLrgYaLbGJo88eJoJjqu9"
            },
            {
            title: "I'm Yours",
            artist: "Jason Mraz",
            year: 2008,
            link: "https://open.spotify.com/track/3QGsuHI8jO1Rx4JWLUh9jd"
            },
            {
            title: "Lost",
            artist: "Frank Ocean",
            year: 2012,
            link: "https://open.spotify.com/track/3q0Q2w5VfOXaj1GLkNUg0n"
            },
            {
            title: "Perfect",
            artist: "Ed Sheeran",
            year: 2017,
            link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
            },
            {
            title: "High Hopes",
            artist: "Panic! At the Disco",
            year: 2018,
            link: "https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom"
            },
            {
            title: "Best Day Of My Life",
            artist: "American Authors",
            year: 2013,
            link: "https://open.spotify.com/track/1h2JjjCrU6sAvU6fweyHth"
            },
            {
            title: "Sunflower",
            artist: "Post Malone & Swae Lee",
            year: 2018,
            link: "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P"
            },
            {
            title: "Little Talks",
            artist: "Of Monsters and Men",
            year: 2011,
            link: "https://open.spotify.com/track/4kE4HrqdZOiTYytwNiEiGm"
            },
            {
            title: "Fading Like a Flower",
            artist: "Roxette",
            year: 2001,
            link: "https://open.spotify.com/track/2LIdYZNan5vhvz6aFyD1CI"
            },
            {
            title: "Good Days",
            artist: "SZA",
            year: 2020,
            link: "https://open.spotify.com/track/3YJJjQPAbDT7mGpX3WtQ9A"
            },
            {
            title: "Under The Pressure",
            artist: "The War On Drugs",
            year: 2014,
            link: "https://open.spotify.com/track/6JWMeNzpqcKJ6UoZrylAUa"
            },
            {
            title: "Someone Like You",
            artist: "Adele",
            year: 2011,
            link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB"
            },
            {
            title: "Riptide",
            artist: "Vance Joy",
            year: 2013,
            link: "https://open.spotify.com/track/0eFvoRSTTaKDvVJFkJi8dS"
            },
            {
            title: "The Scientist",
            artist: "Coldplay",
            year: 2002,
            link: "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle"
            }
      
];

const movieRecommendations = [
    {
        title: "The Intouchables",
        movielink: "https://en.wikipedia.org/wiki/The_Intouchables"
      },
      {
        title: "The Grand Budapest Hotel",
        movielink: "https://en.wikipedia.org/wiki/The_Grand_Budapest_Hotel"
      },
      {
        title: "Silver Linings Playbook",
        movielink: "https://en.wikipedia.org/wiki/Silver_Linings_Playbook"
      },
      {
        title: "La La Land",
        movielink: "https://en.wikipedia.org/wiki/La_La_Land_(film)"
      },
      {
        title: "Hidden Figures",
        movielink: "https://en.wikipedia.org/wiki/Hidden_Figures"
      },
      {
        title: "The Help",
        movielink: "https://en.wikipedia.org/wiki/The_Help_(film)"
      },
      {
        title: "The King's Speech",
        movielink: "https://en.wikipedia.org/wiki/The_King%27s_Speech"
      },
      {
        title: "The Theory of Everything",
        movielink: "https://en.wikipedia.org/wiki/The_Theory_of_Everything_(2014_film)"
      },
      {
        title: "The Martian",
        movielink: "https://en.wikipedia.org/wiki/The_Martian_(film)"
      },
      {
        title: "Gravity",
        movielink: "https://en.wikipedia.org/wiki/Gravity_(2013_film)"
      },
      {
        title: "Life of Pi",
        movielink: "https://en.wikipedia.org/wiki/Life_of_Pi_(film)"
      },
      {
        title: "The Artist",
        movielink: "https://en.wikipedia.org/wiki/The_Artist_(film)"
      },
      {
        title: "The Descendants",
        movielink: "https://en.wikipedia.org/wiki/The_Descendants"
      },
      {
        title: "Midnight in Paris",
        movielink: "https://en.wikipedia.org/wiki/Midnight_in_Paris"
      },
      {
        title: "The Perks of Being a Wallflower",
        movielink: "https://en.wikipedia.org/wiki/The_Perks_of_Being_a_Wallflower_(film)"
      },
      {
        title: "The Fault in Our Stars",
        movielink: "https://en.wikipedia.org/wiki/The_Fault_in_Our_Stars_(film)"
      },
      {
        title: "The Lego Movie",
        movielink: "https://en.wikipedia.org/wiki/The_Lego_Movie"
      },
      {
        title: "Coco",
        movielink: "https://en.wikipedia.org/wiki/Coco_(2017_film)"
      },
      {
        title: "Inside Out",
        movielink: "https://en.wikipedia.org/wiki/Inside_Out_(2015_film)"
      },
      {
        title: "Zootopia",
        movielink: "https://en.wikipedia.org/wiki/Zootopia"
      },
      {
        title: "The Jungle Book",
        movielink: "https://en.wikipedia.org/wiki/The_Jungle_Book_(2016_film)"
      },
      {
        title: "Moana",
        movielink: "https://en.wikipedia.org/wiki/Moana_(2016_film)"
      },
      {
        title: "Frozen",
        movielink: "https://en.wikipedia.org/wiki/Frozen_(2013_film)"
      },
      {
        title: "The Hundred-Foot Journey",
        movielink: "https://en.wikipedia.org/wiki/The_Hundred-Foot_Journey_(film)"
      },
      {
        title: "Chef",
        movielink: "https://en.wikipedia.org/wiki/Chef_(2014_film)"
      },
      {
        title: "The Grandmaster",
        movielink: "https://en.wikipedia.org/wiki/The_Grandmaster_(film)"
      },
      {
        title: "The Lunchbox",
        movielink: "https://en.wikipedia.org/wiki/The_Lunchbox"
      },
      {
        title: "Dangal",
        movielink: "https://en.wikipedia.org/wiki/Dangal_(film)"
      },
      {
        title: "Barfi!",
        movielink: "https://en.wikipedia.org/wiki/Barfi!"
      },
      {
        title: "Queen",
        movielink: "https://en.wikipedia.org/wiki/Queen_(2013_film)"
      },
      {
        title: "Dear Zindagi",
        movielink: "https://en.wikipedia.org/wiki/Dear_Zindagi"
      },
      {
        title: "Zindagi Na Milegi Dobara",
        movielink: "https://en.wikipedia.org/wiki/Zindagi_Na_Milegi_Dobara"
      },
      {
        title: "Yeh Jawaani Hai Deewani",
        movielink: "https://en.wikipedia.org/wiki/Yeh_Jawaani_Hai_Deewani"
      },
      {
        title: "Dil Dhadakne Do",
        movielink: "https://en.wikipedia.org/wiki/Dil_Dhadakne_Do"
      },
      {
        title: "Udaan",
        movielink: "https://en.wikipedia.org/wiki/Udaan_(2010_film)"
      },
      {
        title: "Paan Singh Tomar",
        movielink: "https://en.wikipedia.org/wiki/Paan_Singh_Tomar_(film)"
      },
      {
        title: "Bhaag Milkha Bhaag",
        movielink: "https://en.wikipedia.org/wiki/Bhaag_Milkha_Bhaag"
      },
      {
        title: "Neerja",
        movielink: "https://en.wikipedia.org/wiki/Neerja"
      },
      {
        title: "Mary Kom",
        movielink: "https://en.wikipedia.org/wiki/Mary_Kom_(film)"
      },
      {
        title: "Dhoni: The Untold Story",
        movielink: "https://en.wikipedia.org/wiki/M.S._Dhoni:_The_Untold_Story"
      },
      {
        title: "Chhichhore",
        movielink: "https://en.wikipedia.org/wiki/Chhichhore"
      }
];

const Recommendations = () => {
  const randomSongs = [];
  const songName = [3];
  const songArtist = [3];
  const songYear = [3];
  const songLink = [3];

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * songRecommendations.length);
    randomSongs.push(songRecommendations[randomIndex]);
    songName[i]=songRecommendations[randomIndex].title;
    songArtist[i]=songRecommendations[randomIndex].artist;
    songYear[i]=songRecommendations[randomIndex].year;
    songLink[i]=songRecommendations[randomIndex].link;
  }

  const randomMovies = [];
  const movieName = [3];
  const movieLink =[3];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * movieRecommendations.length);
    randomMovies.push(movieRecommendations[randomIndex]);
    movieName[i] = movieRecommendations[randomIndex].title;
    movieLink[i] = movieRecommendations[randomIndex].movielink;
  }
  const randomSuggestions = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * activityRecommendations.length);
    randomSuggestions.push(activityRecommendations[randomIndex]);
  }

  return (
   
    <div className="recommendations-container">
        <NavbarNew/>
      {/* <div className="activity-recommendation">
        <h2>Activity Recommendation</h2>
        <p>{activityRecommendations[Math.floor(Math.random() * activityRecommendations.length)]}</p>
      </div>
      <div className="song-recommendation">
        <h2>Song Recommendations</h2>
        <ul>
          {randomSongs.map((song, index) => (
            <li key={index}>
              <a href={`https://open.spotify.com/search/${encodeURIComponent(song)}`} target="_blank" rel="noopener noreferrer">
                {song}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="movie-recommendation">
        <h2>Movie Recommendations</h2>
        <ul>
          {randomMovies.map((movie, index) => (
            <li key={index}>
              <a href={`https://www.google.com/search?q=${encodeURIComponent(movie)}+movie`} target="_blank" rel="noopener noreferrer">
                {movie}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      <h1>We Feel you might be Anxious!</h1>
        <div className="part1anxiety">
         
            {/* <div className="iimganxiety">
                <img src={anxietybanner} height="500px" ></img>
                
            </div> */}
           
                <div className="textbanxiety">
                  <h2>Some Tips to help you Calm Down</h2><br></br>
                    {/* <ul id="suggestionlist">
                    <li>{randomSuggestions[0]} </li><br></br><br></br>
                    <li>{randomSuggestions[1]} </li><br></br><br></br>
                    <li>{randomSuggestions[2]} </li>

                    </ul> */}
                    <div className='suggestionbox-container'>
                      <div className='anxietysuggestion'>{randomSuggestions[0]}</div><br></br><br></br>
                      <div className='anxietysuggestion'>{randomSuggestions[1]}</div><br></br><br></br>
                      <div className='anxietysuggestion'>{randomSuggestions[2]}</div>
                    </div>
                    
                </div>

        </div>
        <div className= "part2anxiety">
            
            
                <div className="heading1anxiety" >Song Recommendations</div>
            
                <div className = "reccosa">
            
                    
                    <div className="box2a">
                        
                    {songName[0]}<br></br>
                    {songArtist[0]}<br></br>
                    {songYear[0]}<br></br>
                    <a className='songlink' href= {songLink[0]} target="_blank">Listen now</a>
                    
                    </div> 
                <div className="box2a">
                    {songName[1]}<br></br>
                    {songArtist[1]}<br></br>
                    {songYear[1]}<br></br>
                    <a className='songlink' href= {songLink[1]} target="_blank">Listen now</a>

                    
                </div>
                <div className="box2a">
                    {songName[2]}<br></br>
                    {songArtist[2]}<br></br>
                    {songYear[2]}<br></br>
                    <a className='songlink' href= {songLink[2]} target="_blank" >Listen now</a>
                    
                </div>
                
                    
                
                </div>
            
        </div>
        <div className= "part3anxiety">
            
            
                <div className="heading1anxiety">Movie Recommendations</div> 
            
                <div className = "reccosa">

                    <div className="box1a">
                        {movieName[0]}<br></br>
                        <a className='movielink' href={movieLink[0]} target="_blank">About</a>
                        
                    </div>
                    <div className="box1a">
                        {movieName[1]}<br></br>
                        <a className='movielink' href={movieLink[1]} target="_blank">About</a>
                        
                    </div>
                    <div className="box1a">
                        {movieName[2]}<br></br>
                        <a className='movielink' href={movieLink[2]} target="_blank">About</a>
                        
                    </div>
                </div>
            
        </div>
        <div className="spacer"></div>



      
    </div>

  );
};

export default Recommendations;
