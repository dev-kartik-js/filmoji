
import { OPEN_AI_KEY } from './constants';
import { GoogleGenerativeAI } from "@google/generative-ai";



const genAI = new GoogleGenerativeAI(OPEN_AI_KEY);

export default genAI;