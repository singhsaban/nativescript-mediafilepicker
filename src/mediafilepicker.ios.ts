import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";

/**
 * Dummy class for iOS.
 */
export class Mediafilepicker extends Observable implements MediaPickerInterface {

    constructor() {
        super();
    }

    /**
     * openImagePicker
     */
    public openImagePicker(params: ImagePickerOptions) {
        return;
    }

    /**
     * openVideoPicker
     */
    public openVideoPicker(params: VideoPickerOptions) {
        return;
    }

    /**
     * openAudioPicker
     */
    public openAudioPicker(params: AudioPickerOptions) {
        return;
    }

    /**
     * openFilePicker
     */
    public openFilePicker(params: FilePickerOptions) {
        return;
    }

    public greet() {
        return "Hello, NS";
    }

}
