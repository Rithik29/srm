import React from 'react';
import { useState } from "react";
import { RiCloseLine} from 'react-icons/ri';
import { useEffect } from "react";
// import Navbar2 from '../components/Navbar2';
// import NavbarNew from '../components/newnavbar/Navbarnew';

import {Routes, Route, useNavigate} from 'react-router-dom';
import './sadpage.css';
import bgimg1 from '../assests/meditation.jpg'
import NavbarNew from '../components/Navbarnew';
// import { useNavigate } from 'react-router-dom';


const sadActivityRecommendations =[
    " Practice mindfulness and focus on the present moment. By tuning in to your current surroundings and sensations, you can become more aware of your thoughts and feelings, and learn to observe them without judgment or attachment.",
  " Connect with a friend or loved one and share your feelings. Having a supportive and empathetic listener can help alleviate feelings of loneliness and isolation, and provide a sense of validation and understanding.",
  " Get outside and enjoy some fresh air and sunshine. Sunlight and nature have been shown to boost mood and reduce stress, and physical activity can also release endorphins and promote feelings of well-being.",
  " Try a new hobby or activity that you've been curious about. Engaging in something new and stimulating can help break up the monotony of daily life and provide a sense of accomplishment and fulfillment.",
  " Write down your thoughts and feelings in a journal. This can be a cathartic way to process and release emotions, and also provide a record of progress and growth over time.",
  " Listen to uplifting music or a podcast. This can provide a mood boost and distract from negative thoughts and feelings, while also providing entertainment and education.",
  " Volunteer your time or resources to help someone in need. Helping others has been shown to improve mood and increase self-esteem, while also providing a sense of purpose and meaning.",
  " Take a break from social media and other distractions. These can often contribute to feelings of comparison, anxiety, and overwhelm, and taking a step back can provide much-needed space and clarity.",
  " Practice self-care and treat yourself to something you enjoy. Whether it's a relaxing bath, a favorite food or drink, or a soothing activity like yoga or meditation, self-care can help provide a sense of comfort and rejuvenation.",
  " Set small achievable goals for yourself and celebrate your progress. This can help provide a sense of purpose and direction, and also boost self-confidence and motivation.",
  " Seek professional help from a therapist or counselor. This can provide a safe and confidential space to process emotions and learn coping skills, and also provide guidance and support for any underlying mental health concerns.",
  " Engage in physical activity or exercise regularly. This can improve mood, reduce stress, and provide a sense of accomplishment and self-care.",
  " Spend time with pets or animals. This can provide companionship, comfort, and a sense of unconditional love and support.",
  " Eat a healthy and balanced diet. This can provide essential nutrients and energy for both physical and mental health, and also improve mood and overall well-being.",
  " Take a relaxing bath or shower. This can provide a soothing and calming experience, and also promote relaxation and better sleep.",
  " Try aromatherapy with essential oils. Certain scents like lavender and peppermint have been shown to promote relaxation, reduce anxiety, and improve mood.",
  " Take a break from work or school and rest. This can help prevent burnout and fatigue, and also provide time for self-reflection and self-care.",
  " Learn something new through online courses or books. This can provide mental stimulation and a sense of accomplishment, while also expanding knowledge and skills.",
  " Find a support group or online community. This can provide a sense of connection and understanding with others who may be going through similar experiences, and also provide a safe and non-judgmental space to share and process emotions."

]
const sadSongRecommendations = [
  
   
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

const sadMovieRecommendations = [
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
const SadRecommendations = () => {
    const sadRandomSongs = [];
    const songName = [3];
    const songArtist = [3];
    const songYear = [3];
    const songLink = [3];
  
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * sadSongRecommendations.length);
      sadRandomSongs.push(sadSongRecommendations[randomIndex]);
      songName[i]=sadSongRecommendations[randomIndex].title;
      songArtist[i]=sadSongRecommendations[randomIndex].artist;
      songYear[i]=sadSongRecommendations[randomIndex].year;
      songLink[i]=sadSongRecommendations[randomIndex].link;
    }

    const sadRandomMovies = [];
  const movieName = [3];
  const movieLink =[3];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * sadMovieRecommendations.length);
    sadRandomMovies.push(sadMovieRecommendations[randomIndex]);
    movieName[i] = sadMovieRecommendations[randomIndex].title;
    movieLink[i] = sadMovieRecommendations[randomIndex].movielink;
  }
  const sadRandomSuggestions = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * sadActivityRecommendations.length);
    sadRandomSuggestions.push(sadActivityRecommendations[randomIndex]);
  }

  const navigate = useNavigate()
  const togo = () => {
    navigate('/capture')
  }
  



return (
   
    <div className="recommendations-container">
      <NavbarNew/>
        {/* <Navbar2/> */}
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
      <h1>We Feel you might be Unhappy!</h1>
      <div className='came' onClick={togo}>
          <button id='fost' onClick={togo}>Lets have some fun</button>
        </div>
        <div className="part1sad">
          
            {/* <div className="iimgsad">
                <img src={bgimg1} width="500px" ></img>
                
            </div> */}
           
                <div className="textbsad">
                  <h2 className='sad_rec'>Some Recommendations to brighten your Day!</h2>
                    {/* <ul id="suggestionlist">
                    <li>{sadRandomSuggestions[0]} </li><br></br><br></br>
                    <li>{sadRandomSuggestions[1]} </li><br></br><br></br>
                    <li>{sadRandomSuggestions[2]} </li>

                    </ul> */}
                    {/* <div className='suggestionbox-containersad'>
                      <div className='sadsuggestion'>{sadActivityRecommendations[0]}</div><br></br><br></br>
                      <div className='sadsuggestion'>{sadActivityRecommendations[1]}</div><br></br><br></br>
                      <div className='sadsuggestion'>{sadActivityRecommendations[2]}</div>
                    </div> */}
                    <div className='suggestionbox-container'>
  <div className='image-text-box'>
    <div className='image-box'>
      <img src="https://thebestbrainpossible.com/wp-content/uploads/2018/11/AdobeStock_217024565resize.jpg" alt='Image 1' />
    </div>
    <div className='text-box'>
    {sadActivityRecommendations[0]}
    </div>
  </div>
  <br /><br />
  <div className='image-text-box'>
    <div className='text-box'>
    {sadActivityRecommendations[1]}
    </div>
    <div className='image-box'>
      <img src="https://www.mondaycampaigns.org/wp-content/uploads/2021/08/DeStress-Monday-Mindfulness-Package-Featured-Image-Frame-675x0-c-default.png" alt='Image 2' />
    </div>
  </div>
  <br /><br />
  <div className='image-text-box'>
    <div className='image-box'>
      <img src="https://i.pinimg.com/originals/a2/bd/db/a2bddba2db6c8e9af696f68cf4e69ce6.png" alt='Image 3' />
    </div>
    <div className='text-box'>
    {sadActivityRecommendations[2]}
    </div>
  </div>
</div>


                    
                </div>

        </div>
        <div className= "part2sad">
            
            
                <div  className="heading1sad" >Song Recommendations</div>
            
                <div className = "reccoss">
            
                    
                    <div className="box2s" style={{ backgroundImage: `url()` }}>
                        
                    {songName[0]}<br></br>
                    {songArtist[0]}<br></br>
                    {songYear[0]}<br></br>
                    <a className='songlink' href= {songLink[0]} target="_blank">Listen</a>
                    
                    </div> 
                <div className="box2s" style={{ backgroundImage: `url()` }}>
                    {songName[1]}<br></br>
                    {songArtist[1]}<br></br>
                    {songYear[1]}<br></br>
                    <a className='songlink' href= {songLink[1]} target="_blank">Listen</a>

                    
                </div>
                <div className="box2s" style={{ backgroundImage: `url()` }}>
                    {songName[2]}<br></br>
                    {songArtist[2]}<br></br>
                    {songYear[2]}<br></br>
                    <a className='songlink' href= {songLink[2]} target="_blank" >Listen</a>
                    
                </div>
                
                    
                
                </div>
            
        </div>
        <div className= "part3sad">
            <details>
            
                <summary className="heading1sad" >Movie Recommendations</summary>
            
                <div className = "reccoss">

                    <div className="box1s" style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/1018/146/511/minions-4k-8k-despicable-me-3-wallpaper-thumb.jpg)` }}>
                        {movieName[0]}<br></br>
                        <a className='movielink' href={movieLink[0]} target="_blank">About</a>
                        
                    </div>
                    <div className="box1s" style={{ backgroundImage: `url(https://www.superiorwallpapers.com/funny-wallpapers/crazy-and-funny-minions-hd-wallpaper_2880x1800.jpg)` }}>
                        {movieName[1]}<br></br>
                        <a className='movielink' href={movieLink[1]} target="_blank">About</a>
                        
                    </div>
                    <div className="box1s" style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/195/526/341/minions-movies-funny-yellow-wallpaper-preview.jpg)`}}>
                        {movieName[2]}<br></br>
                        <a className='movielink' href={movieLink[2]} target="_blank">About</a>
                        
                    </div>
                </div>
            </details>
        </div>
        <div className="spacer"></div>



      
    </div>

  );
};

export default SadRecommendations;

  