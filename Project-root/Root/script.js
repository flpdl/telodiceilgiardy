{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Array dei percorsi dei file audio\
const audioFiles = [\
    'Assets/Sounds/audio1.mp3',\
    'Assets/Sounds/audio2.mp3',\
    'Assets/Sounds/audio3.mp3',\
    'Assets/Sounds/audio4.mp3',\
    'Assets/Sounds/audio5.mp3',\
];\
\
const audioPlayer = document.getElementById('audioPlayer');\
const playButton = document.getElementById('playButton');\
\
// Funzione per riprodurre un audio casuale\
playButton.addEventListener('click', () => \{\
    const randomIndex = Math.floor(Math.random() * audioFiles.length);\
    const randomAudio = audioFiles[randomIndex];\
\
    audioPlayer.src = randomAudio;\
    audioPlayer.play();\
\});\
}