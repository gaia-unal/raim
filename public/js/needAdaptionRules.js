/**
 * Created by magir on 6/12/2016.
 */

function filtroReglasNeedEtnica(listaOA, userProfile){

    var listaOAFiltroNeedEtnica = [];

    $.each(listaOA, function(index, lom){

        //lom.value = 0;

        //Étnica
        if(userProfile.need_e1.toLocaleLowerCase().trim() === lom.educationalLanguage.toLocaleLowerCase().trim()){
            lom.value += 1;
        }

        listaOAFiltroNeedEtnica.push(lom);
    });

    listaOAFiltroNeedEtnica.sort(function(a, b) {
        return (b.value - a.value);
    });

    return listaOAFiltroNeedEtnica;
}

function filtroReglasNeedCognitiva(listaOA, userProfile){

    var listaOAFiltroNeedCognitiva = [];

    $.each(listaOA, function(index, lom){

        //lom.value = 0;

        //Cognitiva
        if(userProfile.need_c1.toLocaleLowerCase().trim() === 'si'){

            if(lom.auditory.toLocaleLowerCase().trim() === RulesConstants.a_voice ||
                lom.auditory.toLocaleLowerCase().trim() === RulesConstants.a_sound ||
                lom.visual.toLocaleLowerCase().trim() === 'si'){
                lom.value += 1;
            }
        }

        if(userProfile.need_c2.toLocaleLowerCase().trim() === 'si'){

            if(lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_very_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_medium){
                lom.value += 1;
            }
        }

        if(userProfile.need_c3.toLocaleLowerCase().trim() === 'si'){

            if(lom.typicalLearningTimeMinutes !== 0 ||
                lom.typicalLearningTimeHours !== 0){

                if(lom.typicalLearningTimeMinutes <= 15 &&
                    lom.typicalLearningTimeHours === 0){
                    lom.value = 1;
                }else if((lom.typicalLearningTimeMinutes > 15 &&
                    lom.typicalLearningTimeHours === 0) ||
                    (lom.typicalLearningTimeMinutes === 0 &&
                    lom.typicalLearningTimeHours === 1)){
                    lom.value = 0.8;
                }else if(lom.typicalLearningTimeMinutes > 0 &&
                    lom.typicalLearningTimeHours >= 1){
                    lom.value = 0.6;
                }
            }
        }

        listaOAFiltroNeedCognitiva.push(lom);
    });

    listaOAFiltroNeedCognitiva.sort(function(a, b) {
        return (b.value - a.value);
    });

    return listaOAFiltroNeedCognitiva;
}

function filtroReglasNeedMotriz(listaOA, userProfile){

    var listaOAFiltroNeedMotriz = [];

    $.each(listaOA, function(index, lom){

        //lom.value = 0;

        //Motriz
        if(userProfile.need_m2.toLocaleLowerCase().trim() === 'no' &&
            userProfile.need_m1.toLocaleLowerCase().trim() === 'si'){

            if(lom.mouse.toLocaleLowerCase().trim() === 'si'){
                lom.value += 1;
            }
        }else if(userProfile.need_m2.toLocaleLowerCase().trim() === 'si' &&
            userProfile.need_m1.toLocaleLowerCase().trim() === 'no'){

            if(lom.keyboard.toLocaleLowerCase().trim() === 'si'){
                lom.value += 1;
            }
        }else if(userProfile.need_m2.toLocaleLowerCase().trim() === 'si' &&
            userProfile.need_m1.toLocaleLowerCase().trim() === 'si'){

            if(lom.mouse.toLocaleLowerCase().trim() === 'si' ||
                lom.keyboard.toLocaleLowerCase().trim() === 'si'){
                lom.value += 1;
            }
        }

        listaOAFiltroNeedMotriz.push(lom);
    });

    listaOAFiltroNeedMotriz.sort(function(a, b) {
        return (b.value - a.value);
    });

    return listaOAFiltroNeedMotriz;
}

function filtroReglasNeedAuditiva(listaOA, userProfile){

    var listaOAFiltroNeedAuditiva = [];

    $.each(listaOA, function(index, lom){

        //lom.value = 0;

        //Audición
        if(userProfile.need_a2.toLocaleLowerCase().trim() === 'si' &&
            userProfile.need_a3.toLocaleLowerCase().trim() === 'no'){

            if(lom.signLanguage.toLocaleLowerCase().trim() === 'si'){
                lom.value += 0.9;
            }

            if(lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_very_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_medium){
                lom.value += 0.1;
            }
        }else if(userProfile.need_a2.toLocaleLowerCase().trim() === 'no' &&
            userProfile.need_a3.toLocaleLowerCase().trim() === 'si'){

            if(lom.textual.toLocaleLowerCase().trim() === 'si' &&
                lom.textualAlternative.toLocaleLowerCase().trim() === 'si'){
                lom.value += 0.8;
            }

            if(lom.format.toLowerCase().trim() === RulesConstants.f_text ||
                lom.format.toLowerCase().trim() === RulesConstants.f_image ||
                lom.format.toLowerCase().trim() === RulesConstants.f_application){
                lom.value += 0.2;
            }
        }else if(userProfile.need_a2.toLocaleLowerCase().trim() === 'si' &&
            userProfile.need_a3.toLocaleLowerCase().trim() === 'si'){

            if(lom.signLanguage.toLocaleLowerCase().trim() === 'si' ||
                (lom.textual.toLocaleLowerCase().trim() === 'si' &&
                lom.textualAlternative.toLocaleLowerCase().trim() === 'si')){
                lom.value += 0.8;
            }

            if(lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_very_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_medium){
                lom.value += 0.1;
            }

            if(lom.format.toLowerCase().trim() === RulesConstants.f_text ||
                lom.format.toLowerCase().trim() === RulesConstants.f_image ||
                lom.format.toLowerCase().trim() === RulesConstants.f_application){
                lom.value += 0.1;
            }
        }

        listaOAFiltroNeedAuditiva.push(lom);
    });

    listaOAFiltroNeedAuditiva.sort(function(a, b) {
        return (b.value - a.value);
    });

    return listaOAFiltroNeedAuditiva;
}

function filtroReglasNeedVision(listaOA, userProfile){

    var listaOAFiltroNeedVision = [];

    $.each(listaOA, function(index, lom){

        //lom.value = 0;

        //Visión nula
        if(userProfile.need_v1.toLocaleLowerCase().trim() === 'vision_nula'){

            if(lom.auditory.toLocaleLowerCase().trim() === RulesConstants.a_voice &&
                lom.hearingAlternative.toLowerCase().trim() === 'si'){
                lom.value += 0.8;
            }

            if(lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_very_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_medium){
                lom.value += 0.1;
            }

            if(lom.format.toLowerCase().trim() === RulesConstants.f_audio ||
                lom.format.toLowerCase().trim() === RulesConstants.f_video){
                lom.value += 0.1;
            }
        }

        //Visión baja
        if(userProfile.need_v1.toLocaleLowerCase().trim() === 'baja_vision'){

            if((lom.auditory.toLocaleLowerCase().trim() === RulesConstants.a_voice &&
                lom.hearingAlternative.toLowerCase().trim() === 'si') ||
                (lom.textual.toLocaleLowerCase().trim() === 'si' &&
                lom.textualAlternative.toLowerCase().trim() === 'si')){
                lom.value += 0.7;
            }

            if(lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_low ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_medium ||
                lom.interactivityLevel.toLowerCase().trim() === RulesConstants.il_high){
                lom.value += 0.15;
            }

            if(lom.format.toLowerCase().trim() === RulesConstants.f_audio ||
                lom.format.toLowerCase().trim() === RulesConstants.f_video ||
                lom.format.toLowerCase().trim() === RulesConstants.f_text){
                lom.value += 0.15;
            }
        }

        listaOAFiltroNeedVision.push(lom);
    });

    listaOAFiltroNeedVision.sort(function(a, b) {
        return (b.value - a.value);
    });

    return listaOAFiltroNeedVision;
}