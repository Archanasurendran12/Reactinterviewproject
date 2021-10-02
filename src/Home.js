import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <h1>Products</h1>
            <div className="home_row">
            <Product
            id="1"
            name="The Power of HABIT"
            description="The Power of HABIT: Why We Do What We Do in Life and Business. A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life. She has quit smoking, run a marathon, and been promoted at work. The patterns inside her brain, neurologists discover, have fundamentally changed."
            price= {160}
            author="Charles Duhigg"
            type="hardcover"
            image="https://images-na.ssl-images-amazon.com/images/I/51ejXdSceNL._AA300_.jpg"
            />
            <Product
            id="2"
            name="Think and Grow Rich"
            description="'Think and Grow Rich!' explains entrepreneur Andrew Carnegie’s secret to success, revealed to Napoleon Hill during private interviews with Carnegie, the richest man of his time, and during more than 20 years of research into the lives and philosophies of more than 500 of the most successful people in America. This timeless classic presents a systematic nuts-and-bolts approach to developing the skills and mindset required to achieve exceptional success in any field or endeavor, personal or professional. Hill explains in detail 13 steps required to achieve those goals. The book contains numerous self-tests and checklists."
            price={800}
            author="Napoleon Hill"
            type="hardcover"
            image="https://images-na.ssl-images-amazon.com/images/I/51ZouHoBGtL._SX315_BO1,204,203,200_.jpg"
            />
            </div>
            <div className="home_row">
            <Product         
        id="3"
        name="The 7 Habits of Highly Effective People"
        description="The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change. The 7 Habits of Highly Effective People, the beloved classic that has sold over 20 million copies worldwide, is celebrating its 25th anniversary with this reissue! With a new foreword, the wisdom of the 7 Habits still holds true after all these years. The 7 Habits have become so famous because they work. They have been integrated into everyday thinking by many millions of people. The reason: They work. Habit 1: Be Proactive. Habit 2: Begin with the End in Mind. Habit 3: Put First Things First. Habit 4: Think Win/Win. Habit 5: Seek First to Understand, Then to Be Understood. Habit 6: Synergize. Habit 7: Sharpen the Saw. The book presents a principle-centered approach for solving personal and professional problems."
        price={110}
        author="Stephen R. Covey"
        type="paperback"
        image="https://images-na.ssl-images-amazon.com/images/I/51Myx6jMujL._AA300_.jpg"
        />
        <Product       
        id="4"
        name="Principles: Life and Work"
        description="In Principles, Dalio shares what he's learned over the course of his remarkable career. He argues that life, management, economics, and investing can all be systemized into rules and understood like machines."
        price={180}
        author="Ray Dalio"
        type="hardcover"
        image="https://images-na.ssl-images-amazon.com/images/I/51UyMOpP%2BGL._AA300_.jpg"
        />
        <Product        
        id="5"
        name="How to Win Friends & Influence People"
        description="For more than sixty years the rock-solid, time-tested advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives. Now this previously revised and updated bestseller is available in trade paperback for the first time to help you achieve your maximum potential throughout the next century!"
        price={900}
        author="Dale Carnegie"
        type="paperback"
        image="https://images-na.ssl-images-amazon.com/images/I/51PWIy1rHUL._AA300_.jpg"
        />
            </div>
        </div>
    )
}

export default Home
