// Doc examples

class BiorhythmData {}

// Calculates the biorythm of the named indiidual
// using their birthdate as the starting point
export function computeBiorhythm(
    name:string, // The user's name
    birthdate: Date // the user's birthdate
                    // (time portion of date ignored)
):BiorhythmData // computed object returned
{
    return new BiorhythmData()
    // ... awesome code here...
}