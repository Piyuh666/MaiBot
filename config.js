module.exports = {
    app: {
        px: '/',
        token: 'MTAyODE2MDQ2MDU1OTc2NTU2NQ.GHkbbg.p5RdAqMy-sevxPNVP4iWkfENczNNYBwAdIuqM4',
        playing: 'free fire'
    },

    opt: {
        DJ: {                   // Custom DJ role
            enabled: false, 
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,            // The maximum Volume to select (Default = 100)
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
