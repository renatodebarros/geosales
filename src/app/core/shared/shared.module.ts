import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// PrimeNg Components
import { AccordionModule } from "primeng/accordion";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { ChartModule } from "primeng/chart";
import { CheckboxModule } from "primeng/checkbox";
import { ChipsModule } from "primeng/chips";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { GMapModule } from "primeng/gmap";
import { InputNumberModule } from "primeng/inputnumber";
import { InputMaskModule } from "primeng/inputmask";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from "primeng/knob";
import { LightboxModule } from "primeng/lightbox";
import { ListboxModule } from "primeng/listbox";
import { MenuModule } from "primeng/menu";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MultiSelectModule } from "primeng/multiselect";
import { OrderListModule } from "primeng/orderlist";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { PickListModule } from "primeng/picklist";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RippleModule } from "primeng/ripple";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ScrollTopModule } from "primeng/scrolltop";
import { SelectButtonModule } from "primeng/selectbutton";
import { SidebarModule } from "primeng/sidebar";
import { SkeletonModule } from "primeng/skeleton";
import { StepsModule } from "primeng/steps";
import { TabMenuModule } from "primeng/tabmenu";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TieredMenuModule } from "primeng/tieredmenu";
import { TimelineModule } from "primeng/timeline";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { TreeModule } from "primeng/tree";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { MessageService } from "primeng/api";
import { StatusDescriptionPipe } from "./utils/pipes/status-description.pipe";
import { StatusColorPipe } from "./utils/pipes/status-color.pipe";
import { SpinnerMapComponent } from "./components/spinner-map/spinner-map.component";

@NgModule({
    declarations: [
        HeaderComponent,
        StatusDescriptionPipe,
        StatusColorPipe,
        SpinnerMapComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        DataViewModule,
        DialogModule,
        DropdownModule,
        FileUploadModule,
        GMapModule,
        InputNumberModule,
        InputMaskModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MenuModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        VirtualScrollerModule,
    ],
    providers: [MessageService],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        DataViewModule,
        DialogModule,
        DropdownModule,
        FileUploadModule,
        GMapModule,
        InputNumberModule,
        InputMaskModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MenuModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        VirtualScrollerModule,
        HeaderComponent,
        StatusDescriptionPipe,
        StatusColorPipe,
        SpinnerMapComponent,
    ],
})
export class SharedModule {}
