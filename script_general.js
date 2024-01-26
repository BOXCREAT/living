(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"minHeight":20,"definitions": [{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","borderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"minWidth":100,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadOpacity":1,"playbackBarBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"id":"MainViewer","toolTipBorderRadius":3,"toolTipShadowSpread":0,"playbackBarProgressBorderColor":"#000000","toolTipShadowOpacity":1,"playbackBarHeadBorderSize":0,"playbackBarHeight":10,"width":"100%","subtitlesVerticalAlign":"bottom","progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"toolTipShadowVerticalLength":0,"toolTipFontSize":"1.11vmin","toolTipTextShadowColor":"#000000","progressOpacity":1,"progressRight":0,"toolTipBorderColor":"#767676","toolTipHorizontalAlign":"center","progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"height":"100%","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"class":"ViewerArea","toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#FFFFFF"],"subtitlesTextShadowVerticalLength":1,"toolTipFontWeight":"normal","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"playbackBarBackgroundOpacity":1,"borderSize":0,"subtitlesBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","progressBottom":0,"subtitlesPaddingRight":5,"progressHeight":10,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingRight":6,"progressBorderSize":0,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","shadow":false,"subtitlesOpacity":1,"subtitlesTextDecoration":"none","paddingTop":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"progressBarBorderSize":0,"paddingBottom":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"firstTransitionDuration":0,"subtitlesFontWeight":"normal","toolTipFontColor":"#606060","progressBarBorderRadius":0,"transitionDuration":500,"progressBorderRadius":0,"vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"paddingLeft":0,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressOpacity":1,"playbackBarHeadShadowVerticalLength":0,"surfaceReticleColor":"#FFFFFF","paddingRight":0,"surfaceReticleOpacity":0.6,"toolTipShadowColor":"#333333","subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","playbackBarRight":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"minHeight":50,"data":{"name":"Main Viewer"}},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"hoverFactor":0,"initialSequence":"this.sequence_4E61A3BD_44E4_8F20_41C2_BBAE4E80E212","id":"panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C_camera"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C_camera","media":"this.panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"displayPlaybackBar":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"thumbnailUrl":"media/panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C_t.jpg","partial":false,"label":trans('panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C.label'),"hfovMin":"150%","hfovMax":130,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"url":"media/panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C_t.jpg"}],"class":"Panorama","vfov":180,"hfov":360,"pitch":0,"data":{"label":"360 living02"},"id":"panorama_4F51200D_44E4_88E0_4181_C8343D8A3B7C"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"id":"sequence_4E61A3BD_44E4_8F20_41C2_BBAE4E80E212"}],"borderRadius":0,"backgroundColorDirection":"vertical","minWidth":20,"shadow":false,"width":"100%","paddingTop":0,"gap":10,"mediaActivationMode":"window","horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"id":"rootPlayer","backgroundOpacity":1,"scrollBarMargin":2,"overflow":"hidden","scripts":{"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"translate":TDV.Tour.Script.translate,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"cloneCamera":TDV.Tour.Script.cloneCamera,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"unregisterKey":TDV.Tour.Script.unregisterKey,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initQuiz":TDV.Tour.Script.initQuiz,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"init":TDV.Tour.Script.init,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setValue":TDV.Tour.Script.setValue,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isPanorama":TDV.Tour.Script.isPanorama,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizStart":TDV.Tour.Script.quizStart,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initAnalytics":TDV.Tour.Script.initAnalytics,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"shareSocial":TDV.Tour.Script.shareSocial,"playAudioList":TDV.Tour.Script.playAudioList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getComponentByName":TDV.Tour.Script.getComponentByName,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"resumePlayers":TDV.Tour.Script.resumePlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"existsKey":TDV.Tour.Script.existsKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoBack":TDV.Tour.Script.historyGoBack},"children":["this.MainViewer"],"paddingLeft":0,"defaultVRPointer":"laser","verticalAlign":"top","mouseWheelEnabled":true,"contentOpaque":false,"scrollBarOpacity":0.5,"paddingRight":0,"toolTipHorizontalAlign":"center","height":"100%","desktopMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"vrPolyfillScale":0.75,"scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"class":"Player","scrollBarColor":"#000000","layout":"absolute","backgroundPreloadEnabled":true,"start":"this.init()","borderSize":0,"downloadEnabled":false,"data":{"defaultLocale":"en","name":"Player585","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"backgroundColorRatios":[0]};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Fri Jan 26 2024