import React from 'react';
import { WiMoonAltNew } from "react-icons/wi";
import './index.css';

const BuildConvoSection = () => {
    const stats = [
        { id: 1, text: "Happy Community" },
        { id: 2, text: "210% Boost in Engagement" },
        { id: 3, text: "172+ Ranked Communities" }
    ];

    return (
        <div className="build-conv-wrapper">
            <div className="build-conv-container">
                <div className="conversation">
                    <div className="text-content">
                        <h1>Join the Conversation</h1>
                        <h2><span>✦</span> Build Connections</h2>
                    </div>
                    <div className="text-content">
                        <p>Discover a vibrant community, share your thoughts, and connect with like-minded individuals. Together, we grow.</p>
                        <button className="join-btn">Join Conversation →</button>
                    </div>
                </div>
            </div>
            
            <div className="conversation-image-container">
                <img src="https://communionhub.org/static/media/header-img-1.adf1de5fdab6ef84caff.avif" alt="Convo Image 1" className="full-width-img1" />
                <img src="https://communionhub.org/static/media/header-img-2.f732844f4b0d9b3d357e.avif" alt="Discussion" className="full-width-img2" />
            </div>

            <div className="build-conv-container adjustment">
                <div className="conversation">
                    <div className="text-content-2">
                        <h1>Where Connections Thrive and Ideas Flourish <span className='x-element'>✦ 2x</span></h1>
                    </div>
                    <div className="connection-container">
                        {stats.map((stat) => (
                            <div key={stat.id} className="connection-card">
                                <WiMoonAltNew className="icon" />
                                <p>{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuildConvoSection;
