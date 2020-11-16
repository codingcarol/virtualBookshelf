import './App.css';
import Book from './components/Book.js';

function App() {
  return (
    
    <div className="App">
      <div className="title">
            <h2>Caroline's Book Log</h2>
      </div>
      <div className="stickyDiv">
        <ul className="navUL">
              <a href="#fantasyLink" className='nav-links'><li className='nav-item'>Fantasy</li></a>
              <a href="#scifiLink"  className='nav-links'><li className='nav-item'>Sci-Fi/Thriller</li></a>
              <a href="#historicalLink" className='nav-links'><li className='nav-item'>Historical</li></a>
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
          <Book className="book" title="Mó Dào Zǔ Shī" author="Mò Xiāng Tóngxiù" rating="★★★★½" readDate="March 2020" 
          favorite="yes" angst="●●●●●" boring="sometimes tbh..." romance="amazing." humor="has its moments" characters="love love love" plot="p compelling" world="interesting enough, well done" notes="wangxian!"
          cover="fantasyCovers/mdzsCover.jpg" link="https://www.novelupdates.com/series/the-founder-of-diabolism/"/>

          <Book className="book" title="Tiān Guān Cì Fú" author="Mò Xiāng Tóngxiù" rating="★★★★★" readDate="April 2020" 
          favorite="yes" angst="●●●●" boring="nope" romance="hualian!" humor="great" characters="love love" plot="exciting" world="well explained" notes="favorite!"
          cover="fantasyCovers/tgcf2.jpg" link="https://stanhualian.carrd.co/"/>

          <Book className="book" title="Six of Crows" author="Leigh Bardugo" rating="★★★★★" readDate="2018?" 
          favorite="meh" angst="●●●●" boring="no" romance="nice ships" humor="funny parts!" characters="lovable" plot="intriguing" world="well-done" notes="fun story"
          cover="fantasyCovers/soc.jpg" link="https://www.leighbardugo.com/book/six-of-crows/"/>

          <Book className="book" title="The Infernal Devices" author="Cassandra Clare" rating="★★★★" readDate="2014" 
          favorite="no" angst="●●●●●" boring="sometimes tbh" romance="intense, p good" humor="nice" characters="likable" plot="interesting enough" world="well explained" notes="i'm team jem"
          cover="fantasyCovers/infernal.jpg" link="https://shadowhunters.com/shadowhunters-novels/the-infernal-devices/"/>

          <Book className="book" title="The Mortal Instruments" author="Cassandra Clare" rating="★★★" readDate="2014"       
          favorite="no" angst="●●●●●" boring="yeah" romance="meh, hate clace" humor="meh" characters="ew" plot="bleh" world="interesting" notes="stan magnus and simon"
          cover="fantasyCovers/tmi.jpg" link="https://shadowhunters.com/shadowhunters-novels/the-mortal-instruments/"/>

          <Book className="book" title="A Darker Shade of Magic" author="V.E. Schwab" rating="★★★★" readDate="Feb. 2020?"       
          favorite="no" angst="●●●●" boring="kinda yeah" romance="nice" humor="kinda" characters="don't like lila, others okay" plot="okay" world="love it" notes=""
          cover="fantasyCovers/adsom2.png" link="https://us.macmillan.com/series/shadesofmagic/"/>

          <Book className="book" title="Gaurdian" author="Priest" rating="★★★★½" readDate="2020" 
            favorite="yes" angst="●●●●" boring="" romance="" humor="" characters="" plot="" world="" notes=""
            cover="fantasyCovers/gaurdian.jpg" link="https://www.novelupdates.com/series/guardian/"/>

          <Book className="book" title="Ruby Red" author="Kerstin Gier" rating="★★★★½" readDate="2014"       
          favorite="meh" angst="●●●" boring="no" romance="fun" humor="cute" characters="likable" plot="interesting enough" world="alright" notes="light read, enjoyable"
          cover="fantasyCovers/rubyred.jpg" link="https://www.amazon.com/Ruby-Red-Trilogy/dp/0312551517"/>

          <Book className="book" title="Omniscient Reader's Viewpoint" author="싱숑" rating="★★★★½" readDate="June 2020"       
          favorite="yes" angst="●●●●●" boring="no (mostly not)" romance="N/A (kinda)" humor="present" characters="love them all" plot="exciting" world="exciting" notes="long read, read A Study in Geometric Shapes! best fic you will ever read..."
          cover="fantasyCovers/orv.png" link="https://www.novelupdates.com/series/omniscient-readers-viewpoint/"/>

          <Book className="book" title="The Trash of the Count's Family" author="Yoo Ryeo Han" rating="★★★½" readDate="June 2020"       
          favorite="no" angst="●●" boring="many parts tbh" romance="none" humor="lots" characters="all likable" plot="fun" world="fun" notes="just a fun read"
          cover="fantasyCovers/tcf.jpg" link="https://www.novelupdates.com/series/trash-of-the-counts-family/"/>

          <Book className="book" title="Tower of God" author="SIU" rating="★★★★★" readDate="April 2020"       
          favorite="yes" angst="●●●●" boring="never" romance="none... but khunbam canon" humor="yes!" characters="very many, most are fun" plot="interesting" world="very well done" notes="stan khun aguero agnis"
          cover="fantasyCovers/tog.png" link="https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95&page=1"/>

          <Book className="book" title="I'm the Grim Reaper" author="GRAVEWEAVER" rating="★★★★½" readDate="April 2020"       
          favorite="no" angst="●●" boring="never" romance="a little" humor="funny" characters="all likable" plot="interesting" world="interseting" notes=""
          cover="fantasyCovers/grimReaper.jpeg" link="https://www.webtoons.com/en/supernatural/im-the-grim-reaper/list?title_no=1697&page=1"/>

          <Book className="book" title="Your Throne" author="SAM" rating="★★★★" readDate="August 2020"          
          favorite="no" angst="●●●" boring="kinda" romance="a little? not really" humor="no" characters="interesting" plot="okay" world="okay" notes="kinda forget about it a lot tbh, but it is a good read"
          cover="fantasyCovers/yourThrone.jpg" link="https://www.webtoons.com/en/fantasy/your-throne/list?title_no=2009&page=1"/>
        </div>

          <div className="genreTitle">
            <h2 id="scifiLink">Sci-Fi/Thriller</h2>
          </div>
          <div className="genre sci-fi">
            <Book className="book" title="The Earth is Online" author="Mo Chen Huan" rating="★★★★½" readDate="June 2020"       
            favorite="yes" angst="●●●" boring="never" romance="cute" humor="good moments!" characters="likable" plot="interesting" world="interesting" notes="i felt so stupid reading while this haha. bai ruoyao"
            cover="scifiCovers/teio.jpg" link="https://www.novelupdates.com/series/the-earth-is-online/"/>

            <Book className="book" title="Can Ci Pin" author="Priest" rating="★★★★★" readDate="November 2020"
            favorite="yes" angst="●●●●●" boring="only a little" romance="love love love" humor="great momements" characters="love love love" plot="interesting" world="p cool" notes="lulin married"
            cover="scifiCovers/ccp.jpg" link="https://www.novelupdates.com/series/imperfections/"/>

            <Book className="book" title="Little Mushroom" author="Yi Shi Si Zhou" rating="★★" readDate="November 2020"
            favorite="no" angst="●●●●●" boring="yes" romance="present, meh" humor="a little" characters="didn't like" plot="boring" world="interesting, well done mostly" notes="kinda disappointed"
            cover="scifiCovers/littleMushroom.jpg" link="https://www.novelupdates.com/series/little-mushroom/"/>

            <Book className="book" title="Card Room" author="Die Zhiling" rating="★★★" readDate="July 2020" 
            favorite="no" angst="●●" boring="yeah, mostly" romance="cute" humor="kinda" characters="all likable" plot="good and bad moments" world="interesting" notes="i only liked a few arcs. most were boring"
            cover="scifiCovers/cr.jpg" link="https://www.novelupdates.com/series/card-room/"/>

            <Book className="book" title="Bastard" author="Youngchan Hwang" rating="★★★★½" readDate="May 2020" 
            favorite="no" angst="●●●●●" boring="no" romance="cute" humor="no" characters="all interesting" plot="interesting" world="n/a" notes=""
            cover="scifiCovers/bastard.jpg" link="https://www.novelupdates.com/series/card-room/"/>

            <Book className="book" title="The Hunger Games" author="Suzanne Collins" rating="★★★★" readDate="2012" 
            favorite="np" angst="●●●●●" boring="sometimes" romance="meh" humor="meh" characters="meh" plot="meh" world="well done" notes="loved as a kid"
            cover="scifiCovers/thg2.jpg" link="https://www.amazon.com/Hunger-Games-Book/dp/0439023483"/>

            <Book className="book" title="Divergent" author="Veronica Roth" rating="★" readDate="2016" 
            favorite="no" angst="●●●●●" boring="yeah" romance="bland" humor="no" characters="ew" plot="ew" world="ew" notes="just bad"
            cover="scifiCovers/divergent.jpeg" link="https://www.amazon.com/Divergent-Veronica-Roth/dp/00620240353"/>

            <Book className="book" title="Cinder" author="Marissa Meyer" rating="★★★★½" readDate="205" 
            favorite="no" angst="●●●" boring="no" romance="liked some couples" humor="funny" characters="like some" plot="interesting at beginning" world="interesting" notes=""
            cover="scifiCovers/cinder.jpg" link="https://lunarchronicles.universeofmarissameyer.com/"/>

            <Book className="book" title="The Selection" author="Kiera Cass" rating="★★★" readDate="2015" 
            favorite="no" angst="●●" boring="no" romance="cute" humor="funny" characters="bland" plot="meh" world="meh" notes=""
            cover="scifiCovers/selection.jpg" link="https://www.amazon.com/Selection-Kiera-Cass/dp/0062059947"/>
          </div>

          <div className="genreTitle">
              <h2 id="historicalLink">Historical</h2>
          </div>
          <div className="genre historical">
          </div>

          <div className="genreTitle">
              <h2 id="modernLink">Modern</h2>
          </div>
          <div className="genre modern">

            <Book className="book" title="Seizing Dreams" author="Fei Tian Ye Xiang" rating="★★★★½" readDate="2020" 
            favorite="no" angst="●●●●" boring="" romance="" humor="" characters="" plot="" world="" notes=""
            cover="modernCovers/sd.jpeg" link="https://www.novelupdates.com/series/seizing-dreams/"/>

            <Book className="book" title="Red, White, and Royal Blue" author="Casey McQuiston" rating="★★★★½" readDate="2019?2020?" 
            favorite="no" angst="●●●" boring="no" romance="love" humor="great" characters="great" plot="good" world="n/a" notes=""
            cover="modernCovers/rwrb.jpg" link="https://www.amazon.com/Red-White-Royal-Blue-Novel/dp/1250316774"/>

            <Book className="book" title="The Fault in Our Stars" author="John Green" rating="★★" readDate="2014" 
            favorite="no" angst="●●●●" boring="no" romance="bleh" humor="no" characters="annoying" plot="bad" world="n/a" notes=""
            cover="modernCovers/tfios.jpg" link="https://www.amazon.com/Fault-Our-Stars-John-Green/dp/014242417X"/>

            <Book className="book" title="Simon vs. The Homosapien's Agenda" author="Becky Albertalli" rating="★★★★★" readDate="2018" 
            favorite="yes" angst="●●" boring="no" romance="cute" humor="funny" characters="likable" plot="fun" world="n/a" notes=""
            cover="modernCovers/svtha.jpg" link="https://www.amazon.com/Simon-vs-Homo-Sapiens-Agenda/dp/006234868X/ref=sr_1_1?dchild=1&keywords=simon+vs&qid=1605491273&s=books&sr=1-1"/>      
          </div>

          <div className="genreTitle">
             <h2 id="nonfictionLink">Nonfiction</h2>
            </div>
          <div className="genre nonfiction">
          </div>

          <div className="genreTitle">
              <h2 id="tbrLink">TBR</h2>
            </div>
          <div className="genre tbr">
            <ul className="tbrClass">
              <li>Sha P0 Lang</li>
              <li>Seizing Dreams</li>
              <li>Gaurdian</li>
              <li>2ha</li>
              <li>Kaleidoscope of Death</li>
              <li>Golden Stage</li>
              <li>Female General and Eldest Princess</li>
            </ul>
          </div>
        </div>
    </div>
  );
}


export default App;
