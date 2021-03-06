import { NgModule } from '@angular/core';
import { LeafletDirective } from './core/leaflet.directive';
import { LeafletLayerDirective } from './layers/leaflet-layer.directive';
import { LeafletLayersDirective } from './layers/leaflet-layers.directive';
import { LeafletLayersControlDirective } from './layers/control/leaflet-control-layers.directive';
import { LeafletBaseLayersDirective } from './layers/base/leaflet-baselayers.directive';
var LeafletModule = /** @class */ (function () {
    function LeafletModule() {
    }
    LeafletModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        LeafletDirective,
                        LeafletLayerDirective,
                        LeafletLayersDirective,
                        LeafletLayersControlDirective,
                        LeafletBaseLayersDirective
                    ],
                    declarations: [
                        LeafletDirective,
                        LeafletLayerDirective,
                        LeafletLayersDirective,
                        LeafletLayersControlDirective,
                        LeafletBaseLayersDirective
                    ]
                },] }
    ];
    return LeafletModule;
}());
export { LeafletModule };
//# sourceMappingURL=leaflet.module.js.map