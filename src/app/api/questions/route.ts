import { getQuestions } from "../../_data/questions";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const question = await getQuestions();
        return NextResponse.json(question);
    }catch(error){
        return NextResponse.json({error:'failed to fetch question'},{status:500})
    }
}