import Navbar from "./Navbar";
import {
    useRecoilValue,
  } from 'recoil';
import { predictedState } from "../lib/util";

import React, { useState, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { marked } from "marked";


const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCAu7zkum0hhG8dAq2Y25UHJHzSJJ1XMG4";

export default function Home() {
    const predictedClass = useRecoilValue(predictedState);
    const genAI = new GoogleGenerativeAI(API_KEY);

    console.log(predictedClass);

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

    /**
   * Generative AI Call to fetch text insights
   */
    async function aiRun() {
        setLoading(true);
        setResponse("");
        const generationConfig = {
          temperature: 0,
          topK: 32,
          topP: 1,
          maxOutputTokens: 2048,
          stopSequences: ['".", "!", "?"'],
        };
    
        const model = genAI.getGenerativeModel({
          model: MODEL_NAME,
          generationConfig,
        });
        const birdSound = predictedClass;
        const chat = model.startChat({
            generationConfig,
            safetySettings,
            history: [
              {
                role: "user",
                parts: [
                  {
                    text: `I recorded a bird sound. Can you identify the bird? ${birdSound}`
                  }
                ]
              },
              {
                role: "model",
                parts: [
                  {
                    text: "Based on your description, the bird you heard could be an **Alder Flycatcher**. Here's some information about them:  \n\n* **Scientific name:** Empidonax alnorum  \n* **Size:** 5.5-6.3 inches (14-16 cm)  \n* **Weight:** 0.3-0.4 ounces (8-11 grams)  \n* **Wingspan:** 8.7-10.2 inches (22-26 cm)  \n* **Appearance:** Olive-brown upperparts, whitish underparts, two white wing bars, and a dark tail with white tips.  \n* **Song:** A high-pitched, whistled 'fee-bee-o' or 'fee-bee-bee', just like you described!  \n* **Habitat:** Alder thickets, riparian areas, and deciduous forests.  \n\nWould you like to hear some recordings of the Alder Flycatcher's call or see some pictures?"
                  }
                ]
              }
            ]
          });
      
          const result = await chat.sendMessage(predictedClass);
          const response = result.response;
          const text = response.text();
      
          const parsedText = await marked(text);
          console.log(parsedText);
      
          setResponse(parsedText);
          setLoading(false);
        }
      
        useEffect(() => {
          aiRun();
        }, [predictedClass]);
      



    return (
        <>
            <div className="h-full">
                {loading && <p>Loading ...</p>}
                {aiResponse && (
                    <>
                    <Navbar/>
                    <div className="m-14 flex h-5/6 flex-row rounded-xl border-solid border-4">
                        <div
                        className="flex flex-col justify-center h-full w-full rounded-r-lg p-5 bg-gray-200"
                        dangerouslySetInnerHTML={{ __html: aiResponse }}
                        />
                    </div>
                    </>
                )}
                </div>
          {/* <div className="text-white bg-stone-700 p-2 mt-0 relative text-center">
            <a>@Copyright Avian</a>
          </div> */}
        </>
      );
    }