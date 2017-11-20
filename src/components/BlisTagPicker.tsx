import * as React from 'react';
import * as OF from 'office-ui-fabric-react'
import HelpIcon from './HelpIcon'
import { TipType } from '../components/ToolTips'
import './BlisTagPicker.css'

/**
 * It would be better to take in render functions or components instead of declarative options such as highlight or strike through which are not flexible
 * Also, this has overlap with the BlisTagItem component which could be used here.
 */
export interface IBlisTagPickerProps extends OF.ITagPickerProps {
    label: string
    tipType: TipType
    nonRemovableTags: OF.ITag[]
    nonRemoveableHighlight?: boolean
    nonRemoveableStrikethrough?: boolean
}
export const component = (props: IBlisTagPickerProps) => {
    const { nonRemovableTags, nonRemoveableHighlight = true, nonRemoveableStrikethrough = true, ...tagPickerProps } = props
    return (
        <div>
            <OF.Label>{props.label}
                <HelpIcon tipType={props.tipType} />
            </OF.Label>
            <div className="blis-tagpicker">
                <div className="ms-BasePicker-text ms-BasePicker-text--static pickerText_4c4c5cb3" role="list">
                    {nonRemovableTags.map(tag => (
                        <div className={`ms-TagItem ${nonRemoveableHighlight ? 'ms-TagItem-text--highlight' : ''}`} tabIndex={0} key={tag.key}>
                            <span className={`ms-TagItem-text ${nonRemoveableStrikethrough ? 'ms-TagItem-text--strike' : ''}`} aria-label={tag.name}>{tag.name}</span>
                        </div>
                    ))}
                </div>
                <OF.TagPicker {...tagPickerProps} />
            </div>
        </div>
    )
}

export default component