export const calculateGameScore = (frames, scoreList = []) => {
    let nextFrameScore;
    const currentFrameIndex = scoreList.length;
    const currentFrame = frames[currentFrameIndex];
    const currentScore = scoreList[currentFrameIndex - 1] || 0;

    // Everything is already calculated
    if (frames.length === currentFrameIndex || currentFrameIndex === 10) {
        return scoreList;
    }

    if (isStrike(currentFrame)) {
        nextFrameScore = calculateStrike(currentFrameIndex, frames);
    } else if (isSpare(currentFrame)) {
        nextFrameScore = calculateSpare(currentFrameIndex, frames);
    } else if (currentFrame.length === 2) {
        nextFrameScore = calculateScore(currentFrame);
    }

    return Number.isInteger(nextFrameScore)
        ? calculateGameScore(frames, [...scoreList, currentScore + nextFrameScore])
        : scoreList;
};

const isStrike = (frame) => frame.length === 1 && calculateScore(frame) === 10;
const isSpare = (frame) => frame.length === 2 && calculateScore(frame) === 10;

const calculateScore = (list, start = 0) => list.reduce((acc, curr) => acc + curr, start);

const calculateSpare = (currentFrameIndex, frames) => {
    const nextFrame = frames[currentFrameIndex + 1];
    return nextFrame ? 10 + nextFrame[0] : undefined;
};

const calculateStrike = (currentFrameIndex, frames) => {
    const nextFrame = frames[currentFrameIndex + 1] || [];

    if (nextFrame.length === 2) {
        return calculateScore(nextFrame, 10);
    }

    if (isStrike(nextFrame)) {
        const lastScoreToAdd = calculateSpare(currentFrameIndex + 1, frames);
        return lastScoreToAdd ? 10 + lastScoreToAdd : undefined;
    }

    return undefined;
};
