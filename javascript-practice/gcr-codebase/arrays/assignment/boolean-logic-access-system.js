// Check that every required condition for a secure home is satisfied.
function checkHomeSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    const hasSecurityIssue = !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside;
    const isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

    console.log(`Door locked: ${isDoorLocked}, window closed: ${isWindowClosed}, alarm on: ${isAlarmOn}, owner inside: ${isOwnerInside} -> ${isSecure && !hasSecurityIssue ? "Secure" : "Unsafe"}`);
}

// Try a fully secure home, then two cases with an open security condition.
checkHomeSecurity(true, true, true, true);
checkHomeSecurity(true, false, true, true);
checkHomeSecurity(true, true, false, true);