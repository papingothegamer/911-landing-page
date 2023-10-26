import React, { useState, useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const catalogueItem = [
    {
        title: "CAYMAN",
        src: "/911/IMG_0259.JPG"
    },
    {
        title: "GT",
        src: "/911/IMG_9492.JPG"
    },
    {
        title: "CLASSICS",
        src: "/911/IMG_9091.JPG"
    },
    {
        title: "VINTAGE",
        src: "/911/IMG_9491.JPG"
    },
];

export default function Catalogue() {

    const [selectedCatalogueItem, setSelectedCatalogueItem] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        });
    }, []);

    return (
        <div ref={container} className={styles.catalogueItem}>
            <div className={styles.catalogueItemDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`/images/${catalogueItem[selectedCatalogueItem].src}`}
                        layout="fill"
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                <p>THE 911 SYMBOLIZES AUTOMOTIVE EXCELLENCE, SEAMLESSLY BLENDING OPULENCE WITH UNMATCHED SPEED AND REMARKABLE EFFICIENCY, ALL ENCAPSULATED WITHIN THE FOUR WHEELS THAT CARRY ITS LEGACY.</p>
                </div>
                <div className={styles.column}>
                    <p>PORSCHE IS RENOWNED FOR ITS BOLD AND DARING APPROACH TO THE AUTOMOBILE INDUSTRY, AND THE 911 IS IRREFUTABLE EVIDENCE OF THIS LEGACY. THIS ICONIC MODEL EMBODIES THE SPIRIT OF INNOVATION AND VISIONARY THINKING THAT PORSCHE HAS BEEN KNOWN FOR OVER THE DECADES. THE 911 IS NOT JUST A CAR; IT'S A CELEBRATION OF BRAVE DESIGN CHOICES, TECHNOLOGICAL ADVANCEMENTS, AND A COMMITMENT TO PUSHING THE BOUNDARIES OF WHAT'S POSSIBLE IN THE WORLD OF AUTOMOTIVES.</p>
                </div>
            </div>

            <div className={styles.catalogueList}>
    {catalogueItem.map((catalogue, index) => (
        <div key={index} onMouseOver={() => setSelectedCatalogueItem(index)} className={styles.catalogueEl}>
            <h2>{catalogue.title}</h2>
        </div>
    ))}
    </div>
</div>
    );
}