!function(){"use strict";function e(e){switch(e){case"0":case"false":case!1:return!1;case"1":case"true":case!0:return!0;default:return Boolean(e)}}!function(t){const s="stacked"===flatsomeVars.options.swatches_layout,a=!flatsomeVars.options.swatches_disable_deselect,o='<span class="ux-swatch-selected-value__separator">:&nbsp;</span>',n="ontouchstart"in window;t.fn.flatsomeSwatches=function(){return this.each((function(){var e=t(this);function n(){setTimeout((function(){e.find("tbody tr").each((function(){var e=t(this),s=e.find("select").find("option"),a=s.filter(":selected"),o=[];s.each((function(e,s){""!==s.value&&!0!==t(s).prop("disabled")&&o.push(s.value)})),e.find(".ux-swatch").each((function(){var e=t(this),s=e.attr("data-value");-1!==o.indexOf(s)?e.removeClass("disabled"):(e.addClass("disabled"),a.length&&s===a.val()&&e.removeClass("selected"))}))}))}),100)}function c(e,t){s&&(t=t?o+t:"",e.parents("tr").find(".ux-swatch-selected-value").html()!==t&&e.parents("tr").find(".ux-swatch-selected-value").html(t))}function i(){s&&e.find(".ux-swatch.selected").each((function(){const e=t(this).attr("data-name");t(this).parents("tr").find(".ux-swatch-selected-value").html(o+e)}))}e.hasClass("ux-swatches-js-attached")||(s&&e.find(".variations .label").append('<span class="ux-swatch-selected-value"></span>'),e.on("click",".ux-swatch",(function(e){e.preventDefault();var s=t(this),o=s.closest(".value").find("select"),n=s.data("value"),i=s.data("name");s.hasClass("disabled")||(s.hasClass("selected")?a&&(o.val(""),s.removeClass("selected"),c(s,"")):(s.addClass("selected").siblings(".selected").removeClass("selected"),o.val(n),c(s,i)),o.change())})),e.on("mouseenter mouseleave",".ux-swatch",(function(e){const s=t(this);"mouseenter"===e.type&&c(s,s.attr("data-name")),"mouseleave"===e.type&&c(s,s.closest(".ux-swatches").find(".ux-swatch.selected").attr("data-name"))})),e.on("click",".reset_variations",(function(){e.find(".ux-swatch.selected").removeClass("selected"),e.find(".ux-swatch.disabled").removeClass("disabled"),s&&e.find(".ux-swatch-selected-value").html("")})),n(),e.on("woocommerce_update_variation_values",(function(){n()})),i(),e.on("show_variation",(function(){i()})),e.addClass("ux-swatches-js-attached"))}))};const c=!flatsomeVars.options.swatches_box_behavior_selected,i=e(flatsomeVars.options.swatches_box_update_urls),l="click"===flatsomeVars.options.swatches_box_select_event?"click":"hover",d=e(flatsomeVars.options.swatches_box_reset),r=e(flatsomeVars.options.swatches_box_reset_limited),u=flatsomeVars.options.swatches_box_reset_extent,f=parseInt(flatsomeVars.options.swatches_box_reset_time);t.fn.flatsomeSwatchesLoop=function(){return this.each((function(){var e=t(this);if(e.hasClass("ux-swatches-in-loop-js-attached"))return;var s,a,o,h,m,p=e.closest(".product-small"),w=p.find(".box-image a").first().attr("href"),v=[],_=!1;let x;if("hover"===l&&e.on("mouseenter",".ux-swatch",(function(e){if(!n){var s=t(this);b(),C(s)}})),e.on("click",".ux-swatch",(function(e){e.preventDefault();var s=t(this);if(s.hasClass("selected")){if(c){if(window.UxBuilder)return;return void(window.location=m||w)}s.removeClass("selected"),p.removeClass("ux-swatch-active"),g(),i&&S(v)}else b(),C(s)})),e.on("click",".ux-swatches__limiter",(function(e){const s=t(this);s.parent().find(".ux-swatch--limited.hidden").removeClass("hidden").fadeOut(0).fadeIn(500),s.hide(),t(document).trigger("flatsome-equalize-box")})),d){const s="product-box"===u?"":".ux-swatch";("product-box"===u?p:e).on("mouseenter mouseleave",s,(function(s){if("mouseleave"===s.type){const s=e.find(".selected");x=setTimeout((function(){if(s.removeClass("selected"),p.removeClass("ux-swatch-active"),r){const s=e.find(".ux-swatch--limited:not(.hidden)");s.length>0&&(s.fadeOut(500).addClass("hidden"),e.find(".ux-swatches__limiter").fadeIn(500),t(document).trigger("flatsome-equalize-box"))}g(),i&&S(v)}),f)}else clearTimeout(x)}))}function b(){_||(h=p.find(".box-image picture:not(.back-image) source"),s=p.find(".box-image img:not(.back-image)").first(),a=s.attr("src"),o=s.attr("srcset"),v.push(p.find(".box-image a").first()),v.push(p.find(".woocommerce-loop-product__link")),v.push(p.find(".product_type_variable.add_to_cart_button")),_=!0)}function C(t){t.hasClass("selected")||(e.find(".selected").removeClass("selected"),t.addClass("selected"),p.addClass("ux-swatch-active"),function(e){s.attr("src",e.data("image-src")),e.data("image-srcset")&&(s.attr("srcset",e.data("image-srcset")),h&&h.attr("srcset",e.data("image-srcset")))}(t),i&&function(e,t,s){var a=(t.indexOf("?")>-1?"&":"?")+e.data("attribute_name")+"="+e.data("value");s.forEach((function(e){e.attr("href",t+a)})),m=t+a}(t,w,v))}function g(){s&&s.attr("src",a),o&&(s.attr("srcset",o),h&&h.attr("srcset",o))}function S(e){e.forEach((function(e){e.attr("href",w)}))}e.addClass("ux-swatches-in-loop-js-attached")}))},t((function(){const e=".variations_form",s=".ux-swatches-in-loop:not(.js-ux-swatches)";t(e).flatsomeSwatches(),t(s).flatsomeSwatchesLoop(),t(document).on("wc_variation_form",(function(){t(e).flatsomeSwatches()})),t(document.body).on("wc-composite-initializing",".composite_data",(function(e,s){s.actions.add_action("component_options_state_changed",(function(e){t(e.$component_content).find(".variations_form").removeClass("ux-swatches-js-attached")}))})),t(document).on("flatsome-infiniteScroll-append",(function(e,a,o,n){t(s,n).flatsomeSwatchesLoop()})),t(document).on("facetwp-loaded",(function(){t(s).flatsomeSwatchesLoop()})),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",(function(e){t(s,e.container).flatsomeSwatchesLoop()})),t(document).ajaxComplete((function(){setTimeout((()=>{t(e).flatsomeSwatches(),t(s).flatsomeSwatchesLoop()}),100)})),t(document.body).on("updated_wc_div experimental-flatsome-pjax-request-done",(function(){setTimeout((()=>{t(e).flatsomeSwatches(),t(s).flatsomeSwatchesLoop()}),100)}))}))}(jQuery)}();