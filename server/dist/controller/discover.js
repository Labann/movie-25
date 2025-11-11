import * as express from "express";
import fetchFn from "../utils/fetchFn.js";
import { discoverActionUrl, discoverAnimationUrl, discoverDocumentariesUrl, discoverDramaUrl, discoverHorrorUrl, discoverScienceFictionUrl, discoverSeriesUrl } from "../utils/url.js";
export const discoverSeries = async (req, res) => {
    try {
        const data = await fetchFn(`${discoverSeriesUrl}`);
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const discoverAction = async (req, res) => {
    try {
        const data = await fetchFn(discoverActionUrl);
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const discoverAnimations = async (req, res) => {
    try {
        const data = await fetchFn(discoverAnimationUrl);
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const discoverDocumentaries = async (req, res) => {
    try {
        const data = await fetchFn(discoverDocumentariesUrl);
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const discoverDrama = async (req, res) => {
    try {
        const data = await fetchFn(discoverDramaUrl);
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const discoverHorror = async (req, res) => {
    try {
        const data = await fetchFn(discoverHorrorUrl);
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const discoverScienceFictions = async (req, res) => {
    try {
        const data = await fetchFn(discoverScienceFictionUrl);
        return res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
//# sourceMappingURL=discover.js.map