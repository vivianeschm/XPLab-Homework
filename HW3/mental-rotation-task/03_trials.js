// In this file you can specify the trial data for your experiment




const trial_info = {
    key_press_trials : generate_path(),
    key_press_task: [
        {
        picture: generate_path()[0],
        key1: 'f',
        key2: 'j',
        f: 'same',
        j: 'different',
        expected: 'same',
        rotation: '50',
        correct: 'same'
        }
    ]
};
