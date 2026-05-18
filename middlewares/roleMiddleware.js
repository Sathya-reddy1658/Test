export default function authorizedRole(...authorizedRoles) {
    return (req, res, next) => {
        if (!authorizedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        next();
    };
}