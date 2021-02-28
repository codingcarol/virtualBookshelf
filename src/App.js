import './App.css';
import Book from './components/Book.js';

function App() {
  return (
    
    <div className="App">
      <div className="title">
            <h2>My Favorite Books</h2>
      </div>
      <div className="stickyDiv">
        <ul className="navUL">
              <a href="#fantasyLink" className='nav-links'><li className='nav-item'>Fantasy</li></a>
              <a href="#scifiLink"  className='nav-links'><li className='nav-item'>Sci-Fi/Thriller</li></a>
              <a href="#classicsLink" className='nav-links'><li className='nav-item'>Classics</li></a>
              <a href="#modernLink" className='nav-links'><li className='nav-item'>Modern</li></a>
              <a href="#nonfictionLink" className='nav-links'><li className='nav-item'>Nonfiction</li></a>
              <a href="#tbrLink" className='nav-links'><li className='nav-item'>TBR</li></a>
        </ul>
      </div>
      <div className="bookCategories">
        <div className="genreTitle">
              <h2 id="fantasyLink">Fantasy</h2>
        </div>
        <div className="genre fantasy">
          <Book className="book" title="Six of Crows" author="Leigh Bardugo" rating="★★★★★" readDate="2018?" 
          review="My favorite book!"
          cover="fantasyCovers/soc.jpg" link="https://www.leighbardugo.com/book/six-of-crows/"/>

          <Book className="book" title="A Darker Shade of Magic" author="V.E. Schwab" rating="★★★★" readDate="Feb. 2020?"       
          review="Fantastic adventure."
          cover="fantasyCovers/adsom.jpeg" link="https://us.macmillan.com/series/shadesofmagic/"/>
           <Book className="book" title="Shadow and Bone" author="Leigh Bardugo" rating="★★★" readDate="2019" 
          review="Pretty decent."
          cover="fantasyCovers/shadowBone.jpg" link="https://www.barnesandnoble.com/w/shadow-and-bone-leigh-bardugo/1105622727?ean=9781250027436"/>

          <Book className="book" title="Tower of God" author="SIU" rating="★★★★★" readDate="April 2020"       
          review="Love these characters. "
          cover="fantasyCovers/tog.png" link="https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95&page=1"/>

         
        </div>

          <div className="genreTitle">
            <h2 id="scifiLink">Sci-Fi/Dystopia</h2>
          </div>
          <div className="genre sci-fi">

            <Book className="book" title="Cinder" author="Marissa Meyer" rating="★★★★½" readDate="2014" 
            review="Loved this series growing up."
            cover="scifiCovers/cinder.jpg" link="https://lunarchronicles.universeofmarissameyer.com/"/>
            <Book className="book" title="Red Rising" author="Pierce Brown" rating="★★★★" readDate="2015" 
            review="Exciting adventure." 
            cover="scifiCovers/redRising.jpg" link="https://www.barnesandnoble.com/w/red-rising-pierce-brown/1110614785?ean=9780345539809"/>
            <Book className="book" title="Warbreakers" author="Brandon Sanderson" rating="★★★★" readDate="2018"
            review="Wonderful world building."
            cover="scifiCovers/warbreaker.jpg" link="https://www.barnesandnoble.com/w/warbreaker-brandon-sanderson/1014955753?ean=9780765320308"/>
          </div>

          <div className="genreTitle">
              <h2 id="classicsLink">Classics</h2>
          </div>
          <div className="genre classics">
          <Book className="book" title="Pride and Prejudice" author="Jane Austen" rating="★★★★★" readDate="2020" 
            review="Love the romance."
            cover="classicCovers/pridePrejudice.jpg" link="https://www.barnesandnoble.com/w/pride-and-prejudice-jane-austen/1116668146?ean=9781435171589"/>
          <Book className="book" title="A Tale of Two Cities" author="Charles Dickens" rating="★★★★½" readDate="2020" 
            review="Loved the story."
            cover="classicCovers/tale2.jpg" link="https://www.barnesandnoble.com/w/a-tale-of-two-cities-charles-dickens/1116666164?ean=9781435171480"/>
           <Book className="book" title="The Count of Monte Cristo" author="Alexandre Dumas" rating="★★★★" readDate="2019" 
            review="Exciting story."
            cover="classicCovers/countMonte.jpg" link="https://www.barnesandnoble.com/w/the-count-of-monte-cristo-dons-ebooks/1128294290?ean=2940159030672"/>
          </div>

          <div className="genreTitle">
              <h2 id="modernLink">Modern</h2>
          </div>
          <div className="genre modern">
          <Book className="book" title="Americanah" author="Chimamanda Ngozi Adichie" rating="★★★★★" readDate="2018" 
            review="I learned so much reading this."
            cover="modernCovers/americanah.jpg" link="https://www.barnesandnoble.com/w/americanah-chimamanda-ngozi-adichie/1110955416?ean=9780307455925"/>
           <Book className="book" title="Simon vs. the Homo Sapiens Agenda" author="Becky Albertalli" rating="★★★★★" readDate="2017" 
            review="So funny."
            cover="modernCovers/simonVS.jpg" link="https://www.barnesandnoble.com/w/simon-vs-the-homo-sapiens-agenda-becky-albertalli/1119908802?ean=9780062348685"/>
            <Book className="book" title="The Sun is Also A Star" author="Nicola Yoon" rating="★★★★" readDate="2019" 
            review="Great read."
            cover="modernCovers/sunStar.jpg" link="https://www.barnesandnoble.com/w/the-sun-is-also-a-star-nicola-yoon/1123596765?ean=9780553496680"/>
          </div>

          <div className="genreTitle">
             <h2 id="nonfictionLink">Nonfiction</h2>
          </div>
          <div className="genre nonfiction">
            <Book className="book" title="Cybersecurity and Cyberwar" author="P.W. Singer" rating="★★★★½" readDate="2020"
            review="A great intro to cybersec."
            cover="nonfictionCovers/cyber.jpg" link="https://www.barnesandnoble.com/w/cybersecurity-and-cyberwar-pw-singer/1136858491?ean=9780199918119"/>
            <Book className="book" title="Educated" author="Tara Westover" rating="★★★★★" readDate="2020" 
            review="I loved it!"
            cover="nonfictionCovers/educated.jpg" link="https://www.barnesandnoble.com/w/cybersecurity-and-cyberwar-pw-singer/1136858491?ean=9780199918119"/>
            <Book className="book" title="The Gene: An Intimate History" author="Siddhartha Mukherjee" rating="★★★★" readDate="2019" 
            review="Fascinated me."
            cover="nonfictionCovers/gene.jpg" link="https://www.barnesandnoble.com/w/the-gene-siddhartha-mukherjee/1122858709?ean=9781476733524"/>
          </div>

          <div className="genreTitle">
              <h2 id="tbrLink">To Read List</h2>
            </div>
          <div className="genre tbr">
            <ul className="tbrClass">
              <li>The Hill We Climb - Amanda Gorman</li>
              <li>How Smart Machines Think - Sean Gerrish</li>
              <li>Jujutsu Kaisen - Gege Akutami</li>
              <li>Chain of Iron - Cassandra Clare</li>
              <li>The Priory of the Orange Tree - Samantha Shannon</li>
            </ul>
          </div>
        </div>
    </div>
  );
}


export default App;
