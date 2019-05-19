// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `This is a mental rotation task experiment.
            <br />
            <br />
            Thank you for taking part in this experiment.
            Let's begin with a short description in what follows: <br />
            <br />
            For each trial you will see two rotated figures displayed on the screen.
            Your task is to decide whether those two figures are the same or different.
            You will indicate your decision by pressing <br /> <strong>f</strong> for <strong>same</strong> or <strong>j</strong> for <strong>different</strong>.
            <br /> First there will be 12 practice trials, in which you will get feedback whether your answer was correct or not.
            After the practice trial the actual experiment will begin, containing 48 trials without feedback rounds.
            <br />
            <br />`,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions_practice = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions',
    title: 'General Instructions for the Practice Session',
    text:  `This is the practice trial.
            <br />
            <br />
            The following 12 trials you can get used to the experimental set-up.
            If you think the two figures are the <strong>same</strong> please press <strong>f</strong>, if you think they are <strong>different</strong> please press <strong>j</strong>.
            After each trial you will get feedback, telling you if your answer was correct.
            <br /> If you're ready press the button and start with the practice trials!`,
    buttonText: 'Start with the practice trials'
});

const instructions_main = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'instructions',
    title: 'General Instructions for the Actual Experiment',
    text:  `The practice trials are over and you could get used to the experimental set-up.
            <br />
            <br />
            There will be 48 trials and no feeback-rounds anymore.
            Remember to press <strong>f</strong> for <strong>same</strong> and to press <strong>j</strong> for <strong>different</strong>.
            If you are ready to continue with the actual experiment, please press the button. `,
    buttonText: 'GO'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/


// Here, we initialize a key_press practice view
const key_press_1A = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.key_press_practice.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press_1A',
    trial_type: 'key_press_1A',
    data: trial_info.key_press_practice,
    pause: 1000,
    fix_duration: 500,
    hook: {
        after_response_enabled: check_response
    }
});

// Here, we initialize a key_press practice views
const key_press_2A = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.key_press_experiment.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press_2A',
    trial_type: 'key_press_2A',
    data: trial_info.key_press_experiment,
    pause: 1000,
    fix_duration: 500,
});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale
