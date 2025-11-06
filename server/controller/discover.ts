import * as express from "express";
import fetchFn from "../utils/fetchFn.js";
import { discoverActionUrl, discoverAnimationUrl, discoverDocumentariesUrl, discoverDramaUrl, discoverHorrorUrl, discoverScienceFictionUrl } from "../utils/url.js";

export const discoverAction: express.RequestHandler = async (req, res) => {
    try {
        const data = await fetchFn(discoverActionUrl);
        
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const discoverAnimations: express.RequestHandler = async (req, res) => {
    try {
        const data = await fetchFn(discoverAnimationUrl);
        
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const discoverDocumentaries: express.RequestHandler = async (req, res) => {
    try {
        const data = await fetchFn(discoverDocumentariesUrl);
        
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}

export const discoverDrama: express.RequestHandler = async (req, res) => {
    try {
        const data = await fetchFn(discoverDramaUrl);
        
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const discoverHorror: express.RequestHandler = async (req, res) => {
    try {
        const data = await fetchFn(discoverHorrorUrl);
        
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const discoverScienceFictions: express.RequestHandler = async (req, res) => {
    try {
        const data = await fetchFn(discoverScienceFictionUrl);
        
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}